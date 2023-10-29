import { Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react"
import { useMatches } from "@remix-run/react"
// import { THEME_COLOR_BREADCRUM_BG } from "~/constants/theme.config"

type BreadcrumProps = {}

const Breadcrum = ({ ...rest }: BreadcrumProps) => {
  const matches = useMatches()

  return (
    <Flex
      align="center"
      p={2}
      zIndex="20"
      {...rest}
    >
      <Breadcrumb fontWeight="medium" fontSize="small">
        {matches
          // skip routes that don't have a breadcrumb
          .filter((match:any) => match.handle && match.handle.breadcrumb)
          // render breadcrumbs!
          .map((match:any, index) => (
            <BreadcrumbItem key={index}>
              {match.handle?.breadcrumb(match)}
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
    </Flex>
  )
}

export default Breadcrum
