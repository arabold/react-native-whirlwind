export default interface ThemeProps {
  colors: {
    black: string
    white: string
    primary: string
    secondary: string
    link: string
    info: string
    success: string
    error: string
    warning: string
    disabled: string
    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
    gray600: string
    gray700: string
    gray800: string
    gray900: string
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
    '2xs': number
    xs: number
    sm: number
    base: number
    lg: number
    xl: number
    '2xl': number
    '3xl': number
    '4xl': number
    '5xl': number
  }
  screens: {
    sm: number
    md: number
    lg: number
    xl: number
    '2xl': number
  }
  spacing: {
    px: number
    0: number
    0.5: number
    1: number
    2: number
    3: number
    4: number
    5: number
    6: number
    7: number
    8: number
    9: number
    10: number
    11: number
    12: number
    14: number
    16: number
    20: number
    24: number
    28: number
    32: number
    36: number
    40: number
    44: number
    48: number
    52: number
    56: number
    60: number
    64: number
    72: number
    80: number
    96: number
  }
}
