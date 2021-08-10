import Theme from './ThemeProps'
import { StyleSheet } from 'react-native'

export { default as ThemeProps } from './ThemeProps'
export { default as defaultTheme } from './defaultTheme'

/**
 * Simple helper function that does nothing but retain the TypeScript signature of a style definition.
 */
export function createStyles<T>(
  styles: (theme: Theme) => StyleSheet.NamedStyles<T>
): (theme: Theme) => StyleSheet.NamedStyles<T> {
  return styles
}
