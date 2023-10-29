import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Flex,
  Text,
  VStack,
  Avatar,
} from "@chakra-ui/react"
import {
  Persona,
  PersonaAvatar,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
} from "@saas-ui/react"
import { GoSignOut, GoPerson } from "react-icons/go/index.js"
import { THEME_COLOR_USER_MENU_BG } from "~/constants/theme.config"
import { useAuth } from "~/contexts/AuthContext"

const AuthorizedUserMenu = () => {
  const { info } = useAuth()
  return (
    <VStack w="full" p={4} bgColor={THEME_COLOR_USER_MENU_BG} borderRadius="md">
      <Text fontSize="sm" mb={1} textAlign="start" w="full">
        ยินดีต้อนรับ
      </Text>
      <Persona name={info?.user_fullname} secondaryLabel={info?.court_name} presence="online" src={info?.avatar} />
    </VStack>
  )
}

export default AuthorizedUserMenu
