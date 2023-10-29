import { Icon, Divider, VStack, Text } from "@chakra-ui/react"
import { SidebarSection, NavItem } from "@saas-ui/react"
import { mainMenuItems } from "~/constants/menu.config"

const AuthorizedMainSidebarSection = () => {
  return (
    <SidebarSection px={1}>
      {mainMenuItems &&
        mainMenuItems.map((m) => (
          // <NavItem
          //   icon={<Icon boxSize={6} color="white" as={m.icon}  />}
          //   mb={2}
          //   key={m.id}
          // >
          //   {m.title}
          // </NavItem>
          <VStack
            w="full"
            py={1}
            color="white"
            spacing={1}
            mb={2}
            align="center"
            key={m.id}
            borderRadius="sm"
            _hover={{ backgroundColor: "whiteAlpha.200", cursor:"pointer" }}
            
          >
            <Icon boxSize={6} as={m.icon} />
            <Text fontSize="2xs" align="center">
              {m.title}
            </Text>
          </VStack>
        ))}
      <Divider orientation="horizontal" />
    </SidebarSection>
  )
}

export default AuthorizedMainSidebarSection
