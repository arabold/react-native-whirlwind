---
title: Extending Whirlwind
nav_order: 4
---

# Extending Whirlwind

Generally, you will want to customize the theme using `createTheme` as described before. However, in some cases, you may want to customize a single style class.

Because React Native Whirlwind is using just regular React Native style classes, this is easy to achieve using the spread syntax (`...`).

```jsx
// theme.jsx
import { createTheme } from 'react-native-whirlwind'

// Wrap your new styles in a `StyleSheet.create` to avoid recreation on every render
const t = StyleSheet.create({
  // Define your theme as usual but note the spread operator
  ...createTheme({
    colors: {
      primary: 'orange',
      secondary: 'blue'
    }
  }),
  // Override the existing `textPrimary` class
  textPrimary: {
    color: 'red'
  },
  // Or add a completely new class
  textHighlight: {
    color: 'yellow'
  }
})

export default t
```

Then you can use these custom classes just as usual. For example, in the `MyPage` example above, you can use the new `t.textHighlight` class now to style the `Card` component.
