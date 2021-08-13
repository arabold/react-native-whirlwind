---
title: Platform Support
nav_order: 2
---

# Platform Support

Whirlwind requires at React Native 0.63 or higher and supports the following platforms:

- iOS
- Android

We also support [React Native for Web](https://necolas.github.io/react-native-web/) although there are some [incompatibilities in its `StyleSheet` implementation](https://github.com/necolas/react-native-web/issues/1377).

Whirlwind has not yet been tested on [React Native for Windows and Mac](https://microsoft.github.io/react-native-windows/).

## How About Supporting Plain React?

While it may seem desired to use Whirlwind also in your plain React web projects, it hasn't been designed for that. Regular web pages don't support the same style notation as React Native. CSS is also more powerful than React Native's Yoga layout engine. Pseudo-classes make it possible to achieve more complex and flexible designs with less code. It just wouldn't make sense to backport Whirlwind to plain React. It simply wouldn't be as useful under these conditions.

If you love Whirlwind and look for a similar solution for your plain React web projects, I recommend [Tailwind CSS](https://tailwindcss.com/). It's a great alternative to CSS-in-JS and switching between Whirlwind and Tailwind is easy and straightforward.
