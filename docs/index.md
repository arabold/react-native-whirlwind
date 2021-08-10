---
title: Getting Started
nav_order: 0
has_children: true
---

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

## How Does It Work?

React Native has a powerful feature that allows you to pass an _array of styles_ rather than just a single object to the `style` prop of a component. This can be used to inherit styles and that's exactly what **Whirlwind** is built on.

### The "Common" Way

Typically you would define your styles using React Native's `StyleSheet` class, e.g. as shown below:

```jsx
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Some title</Text>
      <Text style={styles.text}>Some body text</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48
  },
  title: {
    color: 'blue', // primary color
    fontWeight: 'bold',
    fontSize: 30
  },
  body: {
    marginTop: 4
  }
})

export default LotsOfStyles
```

### Whirlwind Way

```jsx
import React from 'react'
import { Text, View } from 'react-native'
import t from './theme'

const LotsOfStyles = () => {
  return (
    <View style={[t.mT9]}>
      <Text style={[t.sansBold, t.font3Xl, t.textPrimary]}>Some title</Text>
      <Text style={[t.mT2]}>Some body text</Text>
    </View>
  )
}

export default LotsOfStyles
```

Instead of defining stylesheets for every component, we use simple utility classes to directly style our elements.

## Semantic CSS, Functional CSS and the "Separation of Concerns"

Adam Wathan, the author of [Tailwind CSS](https://tailwindcss.com/) wrote about his motivation to create utility-first CSS classes [here](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/). So I won't repeat all of his points here, but I will try to give a brief summary.

Similar components should use similar styles. However, more than a few times you'll find yourself in a situation where your existing `.author-bio` class can't be reused for the new article component you just created. So, you either end up renaming your `.author-bio` class to something more generic and content-agnostic that you can use in both cases, eventually leading to a `.card` or `.content` class. Alternatively, you copy-paste your `.author-bio` styles into your new component, leading to code duplication. So, essentially you're left with two choices:

1. Naming your styles after the component they are styling creates _CSS that depends on HTML_.
2. Naming your styles in a content-agnostic way, like `.card` or `.content` in which case your _HTML becomes dependent on your CSS_.

So what do you prefer: Restyleable HTML or reusable CSS?

In my experience, no website or application I ever created, made use of the flexibility the first option offers. Either the site remained pretty much unchanged for a very long time without us touching the CSS code ever again, or we did a major redesign that required us not only to change a handful of CSS classes but also to change the HTML structure itself. In both cases, there's no real benefit of using semantic CSS. Adding new developers to the team who aren't familiar with the existing styles can exacerbate the problem and lead to more duplication of classes. I found that the use of functional CSS was leading to faster results, and, a little to my surprise, a more consistent overall design.
