import {
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react"
import { Link } from "@remix-run/react"

export const handle = {
  breadcrumb: () => (
    <BreadcrumbLink as={Link} to="/">
      หน้าหลัก
    </BreadcrumbLink>
  ),
}

export default function Page() {

  return (
    <Flex p={4}>
      Hello 
    </Flex>
  )
}
