import {
  Flex,
} from "@chakra-ui/react"
import {
  AppShell,
} from "@saas-ui/react"
import { ReactNode } from "react"

import {
  AuthorizedHeader,
  AuthorizedSideBar,
} from "~/components/layout"
import Breadcrum from "./Breadcrum"
import { THEME_SIZE_HEADER_HEIGHT, THEME_SIZE_LEFT_SIDEBAR_WIDTH } from "~/constants/theme.config"

interface AuthorizedLayoutProps {
  children: ReactNode
}

const AuthorizedLayout = ({ children }: AuthorizedLayoutProps) => {
  return (
    <AppShell
      minH="100vh"
      sidebar={
        <AuthorizedSideBar />
      }
      navbar={
        <AuthorizedHeader />
      }
    >
      <Flex w="full" p={2} direction="column" minH="full" as="main" 
      mt={THEME_SIZE_HEADER_HEIGHT} ml={`calc(280px + ${THEME_SIZE_LEFT_SIDEBAR_WIDTH})`}>
        <Breadcrum />
        {children}
      </Flex>
    </AppShell>
  )
}

export default AuthorizedLayout
