import {
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react"
import { PersonaAvatar } from "@saas-ui/react"
import {
  GoBell,
  GoCodespaces,
  GoPasskeyFill,
  GoPerson,
  GoSignOut,
} from "react-icons/go/index.js"
import { APP_ICON, APP_NAME } from "~/constants/app.config"
import { THEME_SIZE_HEADER_HEIGHT } from "~/constants/theme.config"
import { useAuth } from "~/contexts/AuthContext"

const AuthorizedHeader = () => {
  const { info } = useAuth()

  return (
    <Flex
      as="header"
      w="full"
      position="fixed"
      shadow="sm"
      h={THEME_SIZE_HEADER_HEIGHT}
      p={4}
      align="center"
      zIndex={200}
      backgroundColor="rgba(255,255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Center mr={4}>
        <Image src={APP_ICON} boxSize={8} />
      </Center>
      <Heading size="sm" fontWeight="semibold">
        {APP_NAME}
      </Heading>
      <Spacer />
      <HStack>
        <IconButton icon={<GoBell />} aria-label="alert" variant="ghost" />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <PersonaAvatar presence="online" size="xs" src={info?.avatar} />
            }
            variant="ghost"
          />
          <MenuList>
            <MenuGroup title="ผู้ใช้งาน">
              <MenuItem icon={<GoPerson />}>ข้อมูลผู้ใช้งาน</MenuItem>
              <MenuItem icon={<GoPasskeyFill />}>เปลี่ยนรหัสผ่าน</MenuItem>
              <MenuItem icon={<GoCodespaces />}>ประวัติการใช้งาน</MenuItem>
            </MenuGroup>

            <MenuDivider />
            <MenuItem icon={<GoSignOut />}>ออกจากระบบ</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  )
}

export default AuthorizedHeader
