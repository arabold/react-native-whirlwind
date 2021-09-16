---
title: Integrations
nav_order: 5
---

# Integrations

## Usage with `StyleSheet.create`

Sometimes you may want to use the `StyleSheet.create` API to create a new style sheet with more complex definitions. For example, if you want to create a new style sheet for common text formatting that is used in multiple places, you can use the `StyleSheet.create` API to create a new style sheet and then use it in your component.

```tsx
import { StyleSheet } from 'react-native'
import t from './theme'

const TextStyles = StyleSheet.create({
  caption: {
    ...t.textBase,
    ...t.fontSansMedium,
    ...t.leadingLoose,
    ...t.capitalize
  }
})

export default TextStyles
```

## Usage with Styled Components

[react-native-whirlwind](https://github.com/arabold/react-native-whirlwind) plays nicely with [Styled Components](https://styled-components.com/).

```tsx
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import t from './theme'

const StyledView = styled(View)`
  ${[t.m4, t.p2, t.rounded, t.bgGray2]}
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
    titleStyle: [t.flexGrow, t.fontSansBold, t.textBase, t.textCenter],
    iconContainerStyle: [t.mX3],
    buttonStyle: [t.rounded, t.h12, t.pX5, t.overflowHidden],
    containerStyle: [t.rounded, t.overflowHidden],
    disabledStyle: [t.bgGray700],
    disabledTitleStyle: [t.textWhite]
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
