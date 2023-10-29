import {
  Center,
  Divider,
  Icon,
  IconButton,
  Image,
  LinkBox,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import { SidebarSection, NavItem } from "@saas-ui/react"
import { useMemo } from "react"
import { APP_ID } from "~/constants/app.config"
import { THEME_COLOR_SIDEBAR_ICON_ACTIVE } from "~/constants/theme.config"
import { useAuth } from "~/contexts/AuthContext"

const AuthorizedFavoriteAppSidebarSection = () => {
  const { authorize } = useAuth()

  const mainMenuItems = useMemo(() => {
    return authorize.filter((a: any) => a.favorite)
  }, [authorize])
  const isActiveMenu = (id:number) => id == APP_ID
  return (
    <SidebarSection px={1}>
      {mainMenuItems &&
        mainMenuItems.map((m: any) => (
          // <NavItem
          //   icon={<Image  src={m.app_icon}  />}
          //   key={m.app_id}
          //   mb={2}
          // >
          //   {m.app_name}
          // </NavItem>
          <VStack
            w="full"
            py={1}
            color="white"
            spacing={1}
            mb={2}
            align="center"
            key={m.app_id}
            borderRadius="sm"
            _hover={{ backgroundColor: "whiteAlpha.200", cursor:"pointer" }}
            borderLeftWidth={isActiveMenu(m.app_id) ? 4 : "inherit"}
            borderLeftColor={isActiveMenu(m.app_id) ? THEME_COLOR_SIDEBAR_ICON_ACTIVE : "inherit"}
            bgColor={isActiveMenu(m.app_id) ? "whiteAlpha.300" : "inherit"}
          >
            <Image src={m.app_icon} boxSize={6}/>
            <Text fontSize="2xs" align="center">
              {m.app_shortname}
            </Text>
          </VStack>
        ))}
    </SidebarSection>
  )
}

export default AuthorizedFavoriteAppSidebarSection
