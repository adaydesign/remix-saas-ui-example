import { withEmotionCache } from "@emotion/react"
import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import { SaasProvider } from "@saas-ui/react"
import { useContext, useEffect } from "react"
import {
  ServerStyleContext,
  ClientStyleContext,
} from "./utils/chakraui-config/context"
import { theme } from "./utils/theme"
import { AuthorizedLayout } from "./components/layout"
import { API_USER_URL } from "./constants/api.config"
import { AuthContext } from "./contexts/AuthContext"
import { APP_FULL_NAME } from "./constants/app.config"
import { useUsers } from "./api-hooks/useUsers"

export const meta: MetaFunction = () => {
  return [{ title: APP_FULL_NAME}];
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
  },
]

interface DocumentProps {
  children: React.ReactNode
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach((tag) => {
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData?.reset()
    }, [])

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export const loader = async () => {
  const data = await useUsers()
  return data
}

export default function App() {
  const data: any = useLoaderData()

  return (
    <Document>
      <SaasProvider theme={theme}>
        <AuthContext.Provider value={ data?.user }>
          <AuthorizedLayout>
            <Outlet />
          </AuthorizedLayout>
          </AuthContext.Provider>
      </SaasProvider>
    </Document>
  )
}
