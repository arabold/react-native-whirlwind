---
title: Dark Mode
parent: Core Concepts
nav_order: 2
---

While Whirlwind doesn't have a built-in dark mode, it's still easy to make your app aware of your user's preferred color scheme (light or dark). Use a library such as [react-native-appearance](https://www.npmjs.com/package/react-native-appearance) to make your app aware of the user's chosen appearance. In the following example, we make use of the `useColorScheme` hook provided by `react-native-appearance`. It will automatically refresh our layout when the user preferences change without having to restart the app:

```jsx
// App.jsx
import { View, Text } from 'react-native'
import { useColorScheme } from 'react-native-appearance';
import t from './theme'

/**
 * Subscribe to color scheme changes with a hook
 */
function MyComponent() {
  const colorScheme = useColorScheme();
  return (
    <View style={[colorScheme === 'dark' ? t.bgBlack : t.bgWhite]}>
      <Text style={[t.textPrimary]}>Hello World!</Text>
    </View>
  )
}

export default function App() {
  return (
    <AppearanceProvider>
      <MyComponent>
    </AppearanceProvider>
  )
}
```

## Multiple Themes

For more customization, Whirlwind allows you to define multiple themes in your `theme.js`:

```jsx
// theme.jsx
import { Appearance } from 'react-native'
import { createTheme } from 'react-native-whirlwind'

export const light = createTheme({
  colors: {
    // Define your theme colors for light mode
    primary: 'darkred'
  }
})

export const dark = createTheme({
  colors: {
    // Define your theme colors for dark mode
    primary: 'lightred'
  }
})
```

We can then create a custom hook that returns the proper theme based on an external criteria, such as the desired appearance:

```jsx
// useTheme.jsx
import { View, Text } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { dark, light } from './theme'

export default function useTheme() {
  const colorScheme = useColorScheme()
  return colorScheme === 'dark' ? dark : light
}
```

And use it in our app like this:

```jsx
// App.jsx
import { View, Text } from 'react-native'
import { useColorScheme } from 'react-native-appearance';
import useTheme from './useTheme'

/**
 * Subscribe to color scheme changes with a hook
 */
function MyComponent() {
  const colorScheme = useColorScheme()
  const t = useTheme();
  return (
    <View style={[colorScheme === 'dark' ? t.bgBlack : t.bgWhite]}>
      <Text style={[t.textPrimary]}>Hello World!</Text>
    </View>
  )
}

export default function App() {
  return (
    <AppearanceProvider>
      <MyComponent>
    </AppearanceProvider>
  )
}
```
