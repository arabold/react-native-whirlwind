export default interface ThemeProps {
  colors: {
    black: string
    white: string
    primary: string
    secondary: string
    link: string
    success: string
    error: string
    warning: string
    gray5: string
    gray4: string
    gray3: string
    gray2: string
    gray1: string
    gray0: string
    transparent: string
  }
  fontFamilies: {
    sans: string | undefined
    sansItalic: string | undefined
    sansMedium: string | undefined
    sansMediumItalic: string | undefined
    sansBold: string | undefined
    sansBoldItalic: string | undefined
    serif: string | undefined
    serifItalic: string | undefined
    serifMedium: string | undefined
    serifMediumItalic: string | undefined
    serifBold: string | undefined
    serifBoldItalic: string | undefined
    mono: string | undefined
    monoItalic: string | undefined
    monoMedium: string | undefined
    monoMediumItalic: string | undefined
    monoBold: string | undefined
    monoBoldItalic: string | undefined
  }
  fontSizes: {
    xs2: number
    xs: number
    sm: number
    base: number
    lg: number
    xl: number
    xl2: number
    xl3: number
    xl4: number
    xl5: number
  }
  spacing: {
    xs2: number
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xl2: number
    xl3: number
    xl4: number
    xl5: number
  }
}
