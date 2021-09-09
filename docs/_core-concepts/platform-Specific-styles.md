---
title: Platform Specific Styles
nav_order: 4
---

# Platform Specific Styles

Sometimes it is necessary to style elements differently depending on the platform. For example, you might want to style a button differently on mobile devices than on the web, or you might want to style a button differently on iOS than on Android. In this case, you can use React Native's [`Platform` module](https://reactnative.dev/docs/platform-specific-code) to specify which platform you want to style the element for.

You can do this either on the component level directly in the JSX:

```jsx
import { Text, Platform } from 'react-native'
import t from './theme'

function MyComponent() {
  return (
    <Text
      style={Platform.select({
        android: [t.textPrimary],
        ios: [t.textSecondary],
        default: [t.textGray500]
      })}
    >
      This text will appear differently on Android, iOS, and the web.
    </Text>
  )
}
```

Or globally for your whole application in the theme definition:

```jsx
// theme.jsx
import { Platform } from 'react-native'
import { createTheme } from 'react-native-whirlwind'

const t = createTheme({
  colors: {
    primary: Platform.select({
      ios: 'orange',
      android: 'blue',
      default: 'purple'
    })
  }
})

export default t
```

Also, check out React Native's [`PlatformColor` function](https://reactnative.dev/docs/platformcolor) that allows you to access native colors.
