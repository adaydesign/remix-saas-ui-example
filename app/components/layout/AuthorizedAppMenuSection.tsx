import { Icon } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { SidebarSection, NavGroup, NavItem } from '@saas-ui/react'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { menuItems } from '~/constants/menu.config'

const AuthorizedAppMenuSection = () => {
  const { watch } = useFormContext()

  const displayedItems = useMemo(()=>{
    const search = watch("search")
    if(search && search.trim() != ""){
      return menuItems.map(m => {
        const nav = m.navItems?.filter(n => {
          return n.label.includes(search)
        })
        return {...m, navItems: nav}
      })
    }else{
      return menuItems
    }
  },[watch("search")])

  return (
    <SidebarSection flex="1" overflowY="auto">
    { displayedItems &&
      displayedItems.map((m) => (
        <NavGroup
          title={m.title}
          isCollapsible={m.isCollapsible}
          key={m.id}
        >
          {m.navItems?.map((item) => (
            <NavItem
              icon={item.icon && <Icon as={item.icon} />}
              key={item.id}
              as={Link}
              to={item.to}
            >
              {item.label}
            </NavItem>
          ))}
        </NavGroup>
      ))}
  </SidebarSection>
  )
}

export default AuthorizedAppMenuSection