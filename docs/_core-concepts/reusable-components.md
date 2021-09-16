---
title: Reusable Components
nav_order: 4
---

# Creating Reusable Components

Whirlwind follows a simple philosophy when it comes to reusability: _Make your components reusable, not the styles_!

Instead of creating a `.card` CSS class that is used in multiple components, create a `Card` component that can be used in multiple places. Create customizability by adding properties to the component, or even allow overriding your predefined style by providing your own `styles` prop.

In the following example, we create a `Card` component and use the React Native [Stylesheet.compose](https://reactnative.dev/docs/stylesheet#compose) API to allow customization of the default style:

```tsx
import { PropsWithChildren, ViewProps, Stylesheet } from 'react-native'
import t from './theme'

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
    </Card>
  </View>
)
```

Whirlwind also plays nice with [Styled Components](https://styled-components.com).
