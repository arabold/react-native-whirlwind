---
title: Configuration
nav_order: 1
---

# Configuration

Whirlwind has been designed with customization in mind. To configure the look and feel, pass your configuration to the `createTheme` API function.

```jsx
// theme.jsx
import { createTheme } from 'react-native-whirlwind'

const t = createTheme({
  colors: {
    primary: 'orange',
    secondary: 'blue'
  }
})

export default t
```

## Colors

Set the `colors` property to a map of colors. The keys are the color names, and the values are the color values. You only need to define the key-value pairs of the colors you want to change. All others will retain their default value.

Whirlwind supports all colors that are natively supported by React Native such as named colors (`crimson`, `aqua`, `darkolivegreen`), RGB colors (`#f0f`, `#ff00ff`, `#f0ff`, `#ff00ff00`, `rgb(255, 0, 255)`, `rgba(255, 0, 255, 1.0)`), HLS colors (`hsl(360, 100%, 100%)`, `hsla(360, 100%, 100%, 1.0)`) as well as color ints (`0xff00ff00`).

```ts
colors: {
  primary: '#3f51b5',
  primaryLight: '#7986cb',
  primaryDark: '#303f9f',
  primaryContrast: '#fff',
  secondary: '#f50057',
  secondaryLight: '#ff4081',
  secondaryDark: '#c51162',
  secondaryContrast: '#fff',
  info: '#2196f3',
  infoLight: '#64b5f6',
  infoDark: '#1976d2',
  infoContrast: '#fff',
  success: '#4caf50',
  successLight: '#81c784',
  successDark: '#388e3c',
  successContrast: 'rgba(0,0,0,0.87)',
  error: '#f44336',
  errorLight: '#e57373',
  errorDark: '#d32f2f',
  errorContrast: '#fff',
  warning: '#ff9800',
  warningLight: '#ffb74d',
  warningDark: '#f57c00',
  warningContrast: 'rgba(0,0,0,0.87)',
  paper: '#fafafa',
  selected: 'rgba(0,0,0,0.08)',
  disabled: 'rgba(0,0,0,0.26)',
  focused: 'rgba(0,0,0,0.12)',
  muted: 'rgba(0,0,0,0.12)',
  white: '#ffffff',
  gray100: '#f7fafc',
  gray200: '#edf2f7',
  gray300: '#e2e8f0',
  gray400: '#cbd5e0',
  gray500: '#a0aec0',
  gray600: '#718096',
  gray700: '#4a5568',
  gray800: '#2d3748',
  gray900: '#1a202c',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)'
}
```

For more details refer to the [Colors](./colors) chapter.

## Font Families

Whirlwind provides three font classes (`sans`, `serif`, and `mono`), each with 5 variants (`italic`, `medium`, `bold` and combinations thereof):

```ts
fontFamilies: {
  sans: undefined,
  sansItalic: undefined,
  sansMedium: undefined,
  sansMediumItalic: undefined,
  sansBold: undefined,
  sansBoldItalic: undefined,
  serif: undefined,
  serifItalic: undefined,
  serifMedium: undefined,
  serifMediumItalic: undefined,
  serifBold: undefined,
  serifBoldItalic: undefined,
  mono: undefined,
  monoItalic: undefined,
  monoMedium: undefined,
  monoMediumItalic: undefined,
  monoBold: undefined,
  monoBoldItalic: undefined
}
```

For more details refer to the [Fonts](./fonts) chapter.

## Font Sizes

The `base` font size is used as a base not only for fonts, but also for the default spacing of components.

```ts
fontSizes: {
  '2xs': 8,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48
}
```

For more details refer to the [Font Size](../reference/font-size) chapter.

## Leading

Define the leading (line-height) for the base font size. [Fixed leading sizes](../reference/line-height) are based on the sizing configuration.

```ts
leading: {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
}
```

For more details refer to the [Line-Height](../reference/line-height) chapter.

## Letter Spacing

Define the spacing between individual letters.

```ts
letterSpacing: {
  tighter: -0.8,
  tight: -0.4,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.6
}
```

For more details refer to the [Line-Height](../reference/letter-spacing) chapter.

## Spacing

The `spacing` configuration is used to define the padding and margin between components. It is also used to define the line height of `Text` components. The default spacing is based on the font size configuration but can be overridden.

Note that React Native does not support `rem`, `em`, `vm`, `pt`, `px`, and others. Instead, React Native only uses numbers and what it calls a [Pixel Ratio](https://reactnative.dev/docs/pixelratio).

```ts
spacing: {
  px: 1,
  0: 0,
  0.5: 0.125 * fontSizes.base,
  1: 0.25 * fontSizes.base,
  2: 0.5 * fontSizes.base,
  3: 0.75 * fontSizes.base,
  4: 1 * fontSizes.base,
  5: 1.25 * fontSizes.base,
  6: 1.5 * fontSizes.base,
  7: 1.75 * fontSizes.base,
  8: 2 * fontSizes.base,
  9: 2.25 * fontSizes.base,
  10: 2.5 * fontSizes.base,
  11: 2.75 * fontSizes.base,
  12: 3 * fontSizes.base,
  14: 3.5 * fontSizes.base,
  16: 4 * fontSizes.base,
  20: 5 * fontSizes.base,
  24: 6 * fontSizes.base,
  28: 7 * fontSizes.base,
  32: 8 * fontSizes.base,
  36: 9 * fontSizes.base,
  40: 10 * fontSizes.base,
  44: 11 * fontSizes.base,
  48: 12 * fontSizes.base,
  52: 13 * fontSizes.base,
  56: 14 * fontSizes.base,
  60: 15 * fontSizes.base,
  64: 16 * fontSizes.base,
  72: 18 * fontSizes.base,
  80: 20 * fontSizes.base,
  96: 24 * fontSizes.base
}
```

For more details refer to the [Sizing](../reference/sizing) chapter.

## Screens

Screen sizes is something you should rarely need to change. They are used to calculate `maxWidth` style properties.

```ts
screens: {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
```

For more details refer to the [Max Width](../reference/maxwidth) chapter.

## Type Defition

```ts
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
```
