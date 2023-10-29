import { HStack, Center, Heading, Image, Text } from "@chakra-ui/react"
import { Sidebar, SidebarSection, NavItem, SearchInput } from "@saas-ui/react"
import { GoInfo } from "react-icons/go/index.js"
import {
  APP_ICON,
  APP_NAME,
  APP_FULL_NAME,
  APP_VERSION,
} from "~/constants/app.config"
import {
  THEME_COLOR_SIDEBAR_BG,
  THEME_SIZE_HEADER_HEIGHT,
  THEME_SIZE_LEFT_SIDEBAR_WIDTH,
} from "~/constants/theme.config"
import {
  AuthorizedMainSidebarSection,
  AuthorizedFavoriteAppSidebarSection,
  AuthorizedUserMenu,
  AuthorizedAppMenuSection,
} from "."
import { Controller, FormProvider, useForm } from "react-hook-form"

const AuthorizedSideBar = () => {
  const methods = useForm()
  const { control, setValue} = methods

  return (
    <HStack
      minH={`calc(100% - ${THEME_SIZE_HEADER_HEIGHT})`}
      position="fixed"
      spacing="0"
      alignItems="stretch"
      mt={THEME_SIZE_HEADER_HEIGHT}
    >
      <Sidebar
        variant="compact"
        bg={THEME_COLOR_SIDEBAR_BG}
        spacing={1}
        w={THEME_SIZE_LEFT_SIDEBAR_WIDTH}
      >
        <AuthorizedMainSidebarSection />
        <AuthorizedFavoriteAppSidebarSection />
      </Sidebar>
      <Sidebar>
        <FormProvider {...methods}>
          <SidebarSection mb={0}>
            <AuthorizedUserMenu />
          </SidebarSection>
          <SidebarSection>
            <Controller
            control={control} 
            name="search"
            render={({field})=><SearchInput placeholder="ค้นหาเมนู" onReset={()=>setValue("search","")} {...field}/>}
            />
          </SidebarSection>
          <AuthorizedAppMenuSection />
          <SidebarSection>
            <NavItem icon={<GoInfo />}>คู่มือการใช้งาน</NavItem>
          </SidebarSection>
          <SidebarSection>
            <Text fontSize="sm">
              {APP_FULL_NAME} เวอร์ชัน {APP_VERSION}
            </Text>
          </SidebarSection>
        </FormProvider>
      </Sidebar>
    </HStack>
  )
}

export default AuthorizedSideBar
