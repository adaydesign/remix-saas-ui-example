import { GoServer,GoGraph,GoDatabase, GoHome, GoPerson, GoStack, GoSearch } from "react-icons/go/index.js";
import { APP_NAME } from "./app.config";

const mainMenuItems: AppMenuType[] = [
    {
        id:1,
        title:"แดชบอร์ด",
        icon:GoHome,
        to:"/"
    },
    {
        id:2,
        title:"ค้นหา",
        icon:GoSearch,
        to:"/"
    },
    {
        id:3,
        title:"โปรแกรม",
        icon:GoStack,
        to:"/"
    },
    {
        id:4,
        title:"ผู้ใช้งาน",
        icon:GoPerson,
        to:"/"
    },
]

const menuItems: AppMenuType[] = [
    {
        id:1,
        title: APP_NAME,
        navItems:[
            {
                id:1,
                label: "หน้าหลัก",
                icon: GoHome,
                to:"/"
            }
        ]
    },
    {
        id:2,
        title: "รายงาน/สถิติ",
        isCollapsible: true,
        navItems: [
            {
                id:1,
                label: "สถิติการไกล่เกลี่ย",
                icon: GoGraph,
                to:"/page1"
            },
            {
                id:2,
                label: "สถิติการรับฟ้อง",
                icon: GoServer,
                to:"/page2"
            },
            {
                id:3,
                label: "สถิติคดี",
                icon: GoDatabase,
                to:"/page3"
            },
        ]
    }
]


export { mainMenuItems, menuItems }