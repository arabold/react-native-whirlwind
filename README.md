# Whirlwind 🌪️

**Whirlwind** is a utility-first CSS framework specifically designed for [React Native](https://reactnative.dev/). It is heavily inspired by both [Tachyons](https://tachyons.io/) and [Tailwind CSS](https://tailwindcss.com/) and uses low-level building blocks for rapidly building custom designs.

- Readable 👀 - all classes follow a simple, consistent naming convention
- Lightweight 🏋️ - no 3rd party dependencies
- Composable 🧱 - combinable classes for rapid prototyping
- Performant 🚀 - No unnecessary calculations, no unnecessary string parsing, just pure and fast CSS
- Reusable ♻️ - Promote reusability in your team and reduce redundancies in your codebase
- React Native first 🥇 - built for React Native for a best-in-class developer experience

## Why another CSS Framework?

For many developers using utility-first CSS classes seems like a bad idea, violating the concept of "separation of concerns". For years we have learned that HTML should only contain content, while all styling details should exclusively be defined in CSS. CSS is very powerful when it comes to styling components as a whole, with efficient ways of defining styles for subcomponents, siblings, etc. In specific, I'm quite fond of [Styled Components](https://styled-components.com/) for my web projects as they offer an easy and efficient way of creating fully styled, reusable React components.

However, when using React Native, CSS suddenly becomes very limited as it doesn't provide a way of selecting a child or siblings. You can't use pseudo-classes like `:hover` or `:focus` to style a component. You can't use media queries. You can't use the `:before` and `:after`, `:first-child` and `:last-child`, and you can't use the `:nth-child` pseudo-class either. These limitations make it cumbersome and verbatim to style components, especially in React Native.

While there are many CSS frameworks for the web, I have found little that fits my needs. I wanted a framework that was built specifically for React Native, and that kept these limitations in mind. Some concepts and code are directly derived from [react-native-tailwindcss](https://github.com/TVke/react-native-tailwindcss).

### Semantic CSS, Functional CSS and the "Separation of Concerns"

Adam Wathan, the author of [Tailwind CSS](https://tailwindcss.com/) wrote about his motivation to create utility-first CSS classes [here](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/). So I won't repeat all of his points here, but I will try to give a brief summary.

Similar components should use similar styles. However, more than a few times you'll find yourself in a situation where your existing `.author-bio` class can't be reused for the new article component you just created. So, you either end up renaming your `.author-bio` class to something more generic and content-agnostic that you can use in both cases, eventually leading to a `.card` or `.content` class. Alternatively, you copy-paste your `.author-bio` styles into your new component, leading to code duplication. So, essentially you're left with two choices:

1. Naming your styles after the component they are styling creates _CSS that depends on HTML_.
2. Naming your styles in a content-agnostic way, like `.card` or `.content` in which case your _HTML becomes dependent on your CSS_.

So what do you prefer: Restyleable HTML or reusable CSS?

In my experience, no website or application I ever created, made use of the flexibility the first option offers. Either the site remained pretty much unchanged for a very long time without us touching the CSS code ever again, or we did a major redesign that required us not only to change a handful of CSS classes but also to change the HTML structure itself. In both cases, there's no real benefit of using semantic CSS. Adding new developers to the team that aren't familiar with the existing styles can exacerbate the problem and lead to more duplication of classes. I found that the use of functional CSS was leading to faster results, and, to my surprise, a more consistent design.

## Overview

React Native has a little-known feature that allows you to pass an _array of styles_ rather than just a single object to the `style` prop of a component. This can be used to inherit styles and that's exactly what **Whirlwind** does.

Let's take a look at the following example:

```tsx
import { Text, View } from 'react-native'
import { s } from 'react-native-whirlwind'

const MyPage = () => (
  <View style={[s.m4, s.p2, s.rounded, s.bgGray2]}>
    <Text>Some unstyled text in a styled view</Text>
  </View>
)
```

### Theming

**Whirlwind** has a built-in default theme but allows customization of default fonts, spacings and colors. Whirlwind's theming system is very barebone and is designed to work in conjunction with any theming system of the UI component library you might be using. For an example on how to integrate **Whirlwind** with different UI component libraries, check out the sections below.

To initialize your own theme, you can use the `setTheme` function:

```tsx
import { setTheme } from 'react-native-whirlwind'

// Call this once at the start of your app, preferably in your "index.js" file
setTheme({
  colors: {
    primary: '#3F51B5',
    secondary: '#FF5722'
  }
})
```

This will customize the primary and secondary colors of your app. Call `setTheme` as early as possible in your app, preferably in the `index.js` file.

### Reusablility

Whirlwind follows a simple philosophy when it comes to reusability: _Make your components reusable, not the styles_!

Instead of creating a `.card` CSS class that is used in multiple components, create a `Card` component that can be used in multiple places. Create customizability by adding properties to the component, or even allow overriding your predefined style by providing your own `styles` prop.

In the following example, we create a `Card` component and use the React Native [Stylesheet.compose](https://reactnative.dev/docs/stylesheet#compose) API to allow customization of the default style:

```tsx
import { PropsWithChildren, ViewProps, Stylesheet } from 'react-native'

const Card = ({ style, children, ...props }: PropsWithChildren<ViewProps>) => (
  <View style={Stylesheet.compose([s.m4, s.p2, s.rounded, s.bgGray2], style)} {...props}>
    {children}
  </View>
)

const MyPage = () => (
  <View>
    <Card>
      <Text>Card with default style</Text>
    </Card>
    <Card style={[s.bgPrimary]}>
      <Text>Card with different background color</Text>
    </Card Cal, preferably in the `index.js` file.
  </View>
)
```

### Custom Fonts

React Native [is not directly able to mix a custom `fontFamily` with different weights and styles](https://reactnative.dev/docs/text#limited-style-inheritance). The trick is to use different fonts that already have the different styles baked in and omit the `fontWeight` and `fontStyle` attributes. Download the custom font family you need, for example from [Google Fonts](https://fonts.google.com/). This will download a set of files, typically `.ttf` files following a naming convention similar to the one below:

```
{fontFamilyName}
{fontFamilyName}-Bold
{fontFamilyName}-Italic
{fontFamilyName}-BoldItalic
```

To make the use of custom fonts in React Native easier, **Whirlwind** provides font classes that you can use to set the font family and weight for your components:

```
s.fontSans
s.fontSansItalic
s.fontSansMedium
s.fontSansMediumItalic
s.fontSansBold
s.fontSansBoldItalic
```

Those classes are composable with font sizes, text color, and other typography related classes: Cal, preferably in the `index.js` file.

```tsx
<Text style={[s.fontSansMedium, s.textXl, s.textPrimary, s.uppercase]}>Custom Header<Text>
```

### Usage with Styled Components

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

### Usage with React Native Elements

You can also use the [react-native-whirlwind](https://github.com/arabold/react-native-whirlwind) classes with your favorite UI components library, like [React Native Elements](https://reactnativeelements.com/):

```tsx
import { FullTheme } from 'react-native-elements'
import { s } from 'react-native-whirlwind'

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
```
