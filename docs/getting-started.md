---
title: 'Getting Started'
---

## 1. Install React Native Whirlwind

```sh
npm install react-native-whirlwind
```

```sh
yarn add react-native-whirlwind
```

## 2. Create Your Theme Definition

**Whirlwind** has a built-in default theme but allows customization of default fonts, spacings, and colors. Whirlwind's theming system is very barebone and is designed to work in conjunction with any theming system of the UI component library you might be using. For an example of how to integrate **Whirlwind** with different UI component libraries, check out the sections below.

Create a new file `theme.tsx` and call the `createTheme` function from `react-native-whirlwind`. To customize your theme, simply pass your desired colors and other properties as parameter:

```tsx
// theme.tsx
import { createTheme } from 'react-native-whirlwind'

const t = createTheme({
  colors: {
    primary: 'orange',
    secondary: 'blue'
  }
})

export default t
```

This will customize the primary and secondary colors of your app. The exported constant `t` acts as the entry point to the Whirlwind style system. You can use any variable name but we recommend using something short and memorable, as it will be heavily used throughout your application. `t` has proven to be a useful pattern and is recommended for consistency with the documentation and other apps based on Whirlwind.

## 3. Use Your Theme

Import your `theme.tsx` in your app and components where needed:

```tsx
// app.tsx
import t from './theme'

export default function App() {
  return (
    <View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
      <Text>Welcome to Whirlwind</Text>
    </View>
  )
}
```
