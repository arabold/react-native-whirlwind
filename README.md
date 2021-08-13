# React Native Whirlwind 🌪️

A utility-first CSS framework designed for React Native.

<p>
    <!-- <a href="https://github.com/arabold/react-native-whirlwind/actions"><img src="https://img.shields.io/github/workflow/status/arabold/react-native-whirlwind/Node.js%20CI" alt="Build Status"></a> -->
    <a href="https://www.npmjs.com/package/react-native-whirlwind"><img src="https://img.shields.io/npm/dt/react-native-whirlwind.svg" alt="Total Downloads"></a>
    <a href="https://github.com/arabold/react-native-whirlwind/releases"><img src="https://img.shields.io/npm/v/react-native-whirlwind.svg" alt="Latest Release"></a>
    <a href="https://github.com/arabold/react-native-whirlwind/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/react-native-whirlwind.svg" alt="License"></a>
</p>

---

**Whirlwind** is a utility-first CSS framework specifically designed for [React Native](https://reactnative.dev/). It is heavily inspired by both [Tachyons](https://tachyons.io/) and [Tailwind CSS](https://tailwindcss.com/) and uses low-level building blocks for rapidly building custom designs.

- **Readable** 👀 - all classes follow a simple, consistent naming convention
- **Lightweight** 🪶 - no 3rd party dependencies
- **Composable** 🧱 - combinable classes for rapid prototyping
- **Performant** 🚀 - No unnecessary calculations, no unnecessary string parsing, just pure and fast static styles
- **Reusable** ♻️ - Promote reusability in your team and reduce redundancies in your codebase
- **React Native and TypeScript first** 🥇 - built for React Native and 100% written in TypeScript for a best-in-class developer experience

## Getting Started

React Native has a powerful feature that allows you to pass an _array of styles_ rather than just a single object to the `style` prop of a component. This can be used to inherit styles. **Whirlwind** relies on this mechanic to provide a simple, composable API for building custom designs.

### 1. Install React Native Whirlwind

Install [react-native-whirlwind](https://www.npmjs.com/package/react-native-whirlwind) using `npm` or `yarn`:

```sh
# Using npm
npm install react-native-whirlwind

# Using yarn
yarn add react-native-whirlwind
```

### 2. Create Your Theme Definition

Create a new file `theme.jsx` somewhere in your project source folder, e.g. next to your `App.jsx`, and call the `createTheme` function from `react-native-whirlwind`. To customize your theme, simply pass your desired colors and other properties as parameter:

```jsx
// theme.jsx
import { createTheme } from 'react-native-whirlwind'

const t = createTheme({
  colors: {
    primary: 'orange',
    secondary: 'blue'
  }
})

export default createTheme()
```

This will customize the primary and secondary colors of your app. The exported constant `t` acts as the entry point to the Whirlwind style system. You can use any variable name but we recommend using something short and memorable, as it will be heavily used throughout your application. `t` has proven to be a useful pattern and is recommended for consistency with the documentation and other apps based on Whirlwind.

### 3. Use Your Theme

Import your `theme.jsx` in your app and components where needed:

```jsx
// App.jsx
import { View, Text } from 'react-native'
import t from './theme'

export default function App() {
  return (
    <View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
      <Text style={[t.textPrimary]}>Welcome to Whirlwind</Text>
    </View>
  )
}
```

## Documentation

For full documentation, visit [https://arabold.github.io/react-native-whirlwind/](https://arabold.github.io/react-native-whirlwind/).

## Live Example

https://snack.expo.dev/@arabold/react-native-whirlwind

## Who Is Using Whirlwind?

I'm using the predecessor and variants of **Whirlwind** for several years now and in many different commercial projects. Some of them have several 100,000s of installs across the App Store and Google Play. Finally, I decided to open source it and make it available to the community. This is how **Whirlwind** was born.

If you're using it in your project and like to see it listed here, please let me know!
