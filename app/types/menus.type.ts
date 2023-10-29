type NavItemType = {
    id:number
    label: string
    icon?: any
    to?: string
}

type AppMenuType = {
    id:number
    title: string
    icon?: any
    to?: string
    navItems?: NavItemType[]
    isCollapsible?: boolean
}