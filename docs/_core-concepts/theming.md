---
title: Theming
nav_order: 1
---

# Theming

If the default theme doesn't suit your needs (it probably won't), Whirlwind allows you to use customized colors, typography, and spacing for your app. To do this, simply pass in your customizations to the `createTheme` function.

```jsx
// theme.jsx
import { createTheme } from 'react-native-whirlwind'

const t = createTheme({
  colors: {
    primary: 'orange',
    secondary: 'blue'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20
  },
  spacing: {
    1: 8,
    2: 12,
    3: 16,
    4: 24,
    5: 32,
    6: 48
  }
})

export default t
```

You only need to pass those properties that you want to change. For example, if you want to change the primary color, but not the secondary color, you can pass only `primary` in the example above.

### Colors

Whirlwind supports all colors that are natively supported by React Native such as named colors (`crimson`, `aqua`, `darkolivegreen`), RGB colors (`#f0f`, `#ff00ff`, `#f0ff`, `#ff00ff00`, `rgb(255, 0, 255)`, `rgba(255, 0, 255, 1.0)`), HLS colors (`hsl(360, 100%, 100%)`, `hsla(360, 100%, 100%, 1.0)`) as well as color ints (`0xff00ff00`).

### Spacing and Sizes

React Native does not support `rem`, `em`, `vm`, `pt`, `px`, and others. Instead, React Native only uses numbers and what it calls a [Pixel Ratio](https://reactnative.dev/docs/pixelratio).
