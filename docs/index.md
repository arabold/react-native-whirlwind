---
title: Overview
nav_order: 0
---

# Whirlwind 🌪️

**Whirlwind** is a utility-first CSS framework specifically designed for [React Native](https://reactnative.dev/). It is heavily inspired by both [Tachyons](https://tachyons.io/) and [Tailwind CSS](https://tailwindcss.com/) and uses low-level building blocks for rapidly building custom designs.

- **Readable** 👀 - all classes follow a simple, consistent naming convention
- **Lightweight** 🪶 - no 3rd party dependencies
- **Composable** 🧱 - combinable classes for rapid prototyping
- **Performant** 🚀 - No unnecessary calculations, no unnecessary string parsing, just pure and fast static styles
- **Reusable** ♻️ - Promote reusability in your team and reduce redundancies in your codebase
- **React Native and TypeScript first** 🥇 - built for React Native and 100% written in TypeScript for a best-in-class developer experience

## Why another CSS Framework?

For many developers using utility-first CSS classes seems like a bad idea, violating the concept of "separation of concerns". For years we have learned that HTML should only contain content, while all styling details should exclusively be defined in CSS. CSS is very powerful when it comes to styling components as a whole, with efficient ways of defining styles for subcomponents, siblings, etc. In specific, I'm quite fond of [Styled Components](https://styled-components.com/) for my web projects as they offer an easy and efficient way of creating fully styled, reusable React components.

However, when using React Native, styling suddenly becomes very limited as it doesn't provide a way of selecting a child or siblings. The reason is that React Native uses the [Yoga](https://yogalayout.com/) layout engine rather than CSS like a web page. You can't use pseudo-classes like `:hover` or `:focus` to style a component. You can't use media queries. You can't use the `:before` and `:after`, `:first-child` and `:last-child`, and you can't use the `:nth-child` pseudo-class either. These limitations make it cumbersome and verbatim to define reusable styles, and many learnings from working on responsive websites simply don't apply to React Native.

While there are many CSS frameworks for the web, I have found only a few for React Native that would fit my needs. I wanted a framework that was built specifically for React Native, and that kept these limitations in mind. As mentioned before, I'm a fan of [Tailwind CSS](https://tailwindcss.com/) for plain React web pages. However, the various React Native (re-)implementations didn't convince me: [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) and [tailwind-react-native-classnames](https://github.com/jaredh159/tailwind-react-native-classnames) both use a custom string literal to emulate tailwind's CSS class system. But unfortunately, both fell short in providing any autocompletion hints in Visual Studio Code, which makes them difficult to use and error-prone for new developers on your team who aren't familiar with Tailwind yet. I was more in favor of the style class system implemented by [react-native-tailwindcss](https://github.com/TVke/react-native-tailwindcss). But the lack of Typescript support was an immediate showstopper for me. Nonetheless some concepts and source code of Whirlwind is directly derived from [react-native-tailwindcss](https://github.com/TVke/react-native-tailwindcss).

## How Does It Work?

React Native has a powerful feature that allows you to pass an _array of styles_ rather than just a single object to the `style` prop of a component. This can be used to inherit styles. **Whirlwind** relies on this mechanic to provide a simple, composable API for building custom designs.

### The "Traditional" Way: Custom Designs Require Custom Styles

Traditionally you would define your styles using React Native's `StyleSheet` class, with one style class for each element of your design:

```jsx
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SimpleCard = () => {
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
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  body: {
    marginTop: 4
  }
})

export default SimpleCard
```

### Whirlwind Way: Using Utility Classes Without Writing Styles

Instead of using semantic CSS classes, **Whirlwind** encourages the use of utility classes that are freely combined to design your final look and feel:

```jsx
import React from 'react'
import { Text, View } from 'react-native'
import t from './theme'

const SimpleCard = () => {
  return (
    <View style={[t.mT9]}>
      <Text style={[t.sansBold, t.font3Xl, t.textPrimary]}>Some title</Text>
      <Text style={[t.mT2]}>Some body text</Text>
    </View>
  )
}

export default SimpleCard
```

The utility classes are reusable building blocks that come with a built-in theme that you can easily change. In the above design we used:

- `t.mT9` and `t.mT2` to define a top-margin. Our default theme initializes it to 48 pixels and 4 pixels respectively.
- `t.sansBold`, a utility class to choose a sans-serif font with a bold weight,
- and `t.font3Xl` to use a larger font size.
- Finally, `t.textPrimary` renders the text in our primary color, which we can define in our theme.

This approach allows us to implement a completely custom component design without defining a single custom style class. By reusing the same building blocks throughout your app, you ensure a consistent look and feel, while still providing a lot of flexibility through Whirlwind's theming engine.

Using utility classes still sounds atrocious? Trust me, it will feel natural soon, **but you probably have to try it out to see how it works**!

## Live Example

<div data-snack-id="@arabold/react-native-whirlwind" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#F9F9F9;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>

## Semantic CSS, Functional CSS and the "Separation of Concerns"

Adam Wathan, the author of [Tailwind CSS](https://tailwindcss.com/) wrote about his motivation to create utility-first CSS classes [here](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/). So I won't repeat all of his points here, but I will try to give a brief summary.

Similar components should use similar styles. However, more than a few times you'll find yourself in a situation where your existing `.author-bio` class can't be reused for the new article component you just created. So, you either end up renaming your `.author-bio` class to something more generic and content-agnostic that you can use in both cases, eventually leading to a `.card` or `.content` class. Alternatively, you copy-paste your `.author-bio` styles into your new component, leading to code duplication. So, essentially you're left with two choices:

1. Naming your styles after the component they are styling (such as `.author-bio`), creates _CSS that depends on HTML_. In this model, your HTML is restyleable, but your CSS is not reusable
2. Naming your styles in a content-agnostic way, like `.card` or `.content` in which case your _HTML becomes dependent on your CSS_. In this model, your CSS is reusable, but your HTML is not restyleable.

**So what do you prefer**: Restyleable HTML or reusable CSS?

In my experience, no website or application I ever created, made use of the flexibility the first option offers. Professional websites don't change all that often and when they do, it's usually due to a major redesign with many new pages and components anyway, not just a simple change in the styling. That's why I prefer the second option: reusability over the option to restyle my HTML. Utility classes drive this choice to an extreme: Classes become simpler and simpler to a point that a single CSS class only does a single thing.

- **Stop worrying about class names**. Don't waste brain energy on `.author-bio`, `.author-bio-wrapper`, `.author-bio-inner-container`, `.author-bio-title`, `.author-bio-title-wrapper` and other silly names like that for something that's just a flexbox anyway.
- **Make your design more robust**. No more worrying about breaking the design in one place if you change it on another. Reusing complex CSS classes across multiple pages and components comes with hidden, hard-to-manage dependencies. Changing a common class often leads to unforeseen consequences. But with utility classes, updating the design of a component is as easy as switching out the necessary class with zero side effects.
- **Onboard engineers quicker**. Whirlwind's utility classes are already defined and you can start using them right away. They always behave in exactly the specified way. Using a consistent color and spacing scheme makes it easy to keep consistency throughout the whole application.
