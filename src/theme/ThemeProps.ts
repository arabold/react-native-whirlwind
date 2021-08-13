import letterSpacing from './defaultTheme/letterSpacing'

export default interface ThemeProps {
  colors: {
    primary: string
    primaryLight: string
    primaryDark: string
    primaryContrast: string
    secondary: string
    secondaryLight: string
    secondaryDark: string
    secondaryContrast: string
    info: string
    infoLight: string
    infoDark: string
    infoContrast: string
    success: string
    successLight: string
    successDark: string
    successContrast: string
    error: string
    errorLight: string
    errorDark: string
    errorContrast: string
    warning: string
    warningLight: string
    warningDark: string
    warningContrast: string
    paper: string
    selected: string
    disabled: string
    focused: string
    muted: string
    white: string
    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray500: string
    gray600: string
    gray700: string
    gray800: string
    gray900: string
    black: string
    transparent: string
  }
  fontFamilies: {
    sans: string | null | undefined
    sansItalic: string | null | undefined
    sansMedium: string | null | undefined
    sansMediumItalic: string | null | undefined
    sansBold: string | null | undefined
    sansBoldItalic: string | null | undefined
    serif: string | null | undefined
    serifItalic: string | null | undefined
    serifMedium: string | null | undefined
    serifMediumItalic: string | null | undefined
    serifBold: string | null | undefined
    serifBoldItalic: string | null | undefined
    mono: string | null | undefined
    monoItalic: string | null | undefined
    monoMedium: string | null | undefined
    monoMediumItalic: string | null | undefined
    monoBold: string | null | undefined
    monoBoldItalic: string | null | undefined
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
  leading: {
    none: number
    tight: number
    snug: number
    normal: number
    relaxed: number
    loose: number
  }
  letterSpacing: {
    tighter: number
    tight: number
    normal: number
    wide: number
    wider: number
    widest: number
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
