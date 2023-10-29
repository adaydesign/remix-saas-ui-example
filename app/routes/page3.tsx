import {
    BreadcrumbLink,
    Flex,
  } from "@chakra-ui/react"
  import { Link } from "@remix-run/react"
  
  export const handle = {
    breadcrumb: () => (
      <BreadcrumbLink as={Link} to="/">
        page 3
      </BreadcrumbLink>
    ),
  }
  
  export default function Page() {
  
    return (
      <Flex p={4}>
        Page 3 Hello 
      </Flex>
    )
  }
  