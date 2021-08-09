import Theme from './Theme'
import defaultTheme from './defaultTheme'

export { default as Theme } from './Theme'

let theme: Theme = defaultTheme

export function setTheme(newTheme: Partial<Theme>) {
  theme = {
    ...newTheme, // copy any custom mixins that aren't part of the official theme
    colors: { ...defaultTheme.colors, ...(newTheme?.colors ?? {}) },
    fontFamilies: { ...defaultTheme.fontFamilies, ...(newTheme?.fontFamilies ?? {}) },
    fontSizes: { ...defaultTheme.fontSizes, ...(newTheme?.fontSizes ?? {}) },
    spacing: { ...defaultTheme.spacing, ...(newTheme?.spacing ?? {}) }
  }
}

export default theme
