import { StyleSheet } from 'react-native'
import { defaultTheme, ThemeProps } from '../theme'

import background from './background'
import borders from './borders'
import effects from './effects'
import flexbox from './flexbox'
import layouts from './layouts'
import sizing from './sizing'
import spacing from './spacing'
import typography from './typography'

type MakeOptional<T> = {
  [P in keyof T]?: MakeOptional<T[P]>
}

export function createTheme(newTheme?: MakeOptional<ThemeProps>) {
  const theme = {
    ...newTheme, // copy any custom mixins that aren't part of the official theme
    colors: { ...defaultTheme.colors, ...(newTheme?.colors ?? {}) },
    fontFamilies: { ...defaultTheme.fontFamilies, ...(newTheme?.fontFamilies ?? {}) },
    fontSizes: { ...defaultTheme.fontSizes, ...(newTheme?.fontSizes ?? {}) },
    screens: { ...defaultTheme.screens, ...(newTheme?.screens ?? {}) },
    spacing: { ...defaultTheme.spacing, ...(newTheme?.spacing ?? {}) }
  }
  return StyleSheet.create({
    ...background(theme),
    ...borders(theme),
    ...effects(theme),
    ...flexbox(theme),
    ...layouts(theme),
    ...sizing(theme),
    ...spacing(theme),
    ...typography(theme)
  })
}
