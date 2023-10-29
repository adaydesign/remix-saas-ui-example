import { extendTheme } from '@chakra-ui/react'
import { baseTheme } from '@saas-ui/react'
import { theme as glassTheme } from '@saas-ui/theme-glass'
import { theme as cmxTheme } from './theme-cmx'

const theme = extendTheme(
    baseTheme,
    glassTheme,
    cmxTheme,
)

export { theme }