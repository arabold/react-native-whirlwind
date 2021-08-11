---
title: Theming
parent: Core Concepts
nav_order: 0
---

If the default theme doesn't suit your needs (it probably won't), Whirlwind allows you to use customized colors and spacing for your app. To do this, simply pass in your customizations to the `createTheme` function.

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

## Creating Reusable Components

Whirlwind follows a simple philosophy when it comes to reusability: _Make your components reusable, not the styles_!

Instead of creating a `.card` CSS class that is used in multiple components, create a `Card` component that can be used in multiple places. Create customizability by adding properties to the component, or even allow overriding your predefined style by providing your own `styles` prop.

In the following example, we create a `Card` component and use the React Native [Stylesheet.compose](https://reactnative.dev/docs/stylesheet#compose) API to allow customization of the default style:

```tsx
import { PropsWithChildren, ViewProps, Stylesheet } from 'react-native'

const Card = ({ style, children, ...props }: PropsWithChildren<ViewProps>) => (
  <View style={Stylesheet.compose([t.m4, t.p2, t.rounded, t.bgGray2], style)} {...props}>
    {children}
  </View>
)

const MyPage = () => (
  <View>
    <Card>
      <Text>Card with default style</Text>
    </Card>
    <Card style={[t.bgPrimary]}>
      <Text>Card with different background color</Text>
    </Card Cal, preferably in the `index.js` file.
  </View>
)
```

Whirlwind also plays nice with [Styled Components](https://styled-components.com). See below for additional info!

## Usage with Styled Components

[react-native-whirlwind](https://github.com/arabold/react-native-whirlwind) plays nicely with [Styled Components](https://styled-components.com/).

```tsx
import { Text, View } from 'react-native'
import { s } from 'react-native-whirlwind'
import styled from 'styled-components/native'

const StyledView = styled(View)`
  ${[s.m4, s.p2, s.rounded, s.bgGray2]}
`

const MyPage = () => (
  <StyledView>
    <Text>Some unstyled text in a styled view</Text>
  </StyledView>
)
```

## Usage with React Native Elements

You can also use the [react-native-whirlwind](https://github.com/arabold/react-native-whirlwind) classes with your favorite UI components library, like [React Native Elements](https://reactnativeelements.com/):

```tsx
import { View } from 'react-native'
// Import the theme provider from React Native Elements
import { ThemeProvider, FullTheme, Button } from 'react-native-elements'
// Import our Whirlwind style definitions
import t from './theme'

// Create a new React Native Elements theme with a customized Button component
const theme: Partial<FullTheme> = {
  Button: {
    raised: false,
    titleStyle: [s.flexGrow, s.fontSansBold, s.textBase, s.textCenter],
    iconContainerStyle: [s.mX3],
    buttonStyle: [{ borderRadius: s.h12.height / 2 }, s.h12, s.pX5, s.overflowHidden],
    containerStyle: [{ borderRadius: s.h12.height / 2 }, s.overflowHidden],
    disabledStyle: [s.bgGray3],
    disabledTitleStyle: [s.textWhite]
  }
}

// Initialize the React Native Elements theme in your App
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
        <Button title="My Styled Button" />
      </View>
    </ThemeProvider>
  )
}
```
