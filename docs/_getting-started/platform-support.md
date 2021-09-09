---
title: Platform Support
nav_order: 2
---

# Platform Support

[![runs on Expo](https://img.shields.io/badge/Runs%20on%20Expo-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports web](https://img.shields.io/badge/Web-4630EB.svg?style=for-the-badge&logo=GOOGLE-CHROME&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

Whirlwind requires React Native 0.63 or higher and supports the following platforms:

- iOS
- Android
- Web

Although [React Native for Web](https://necolas.github.io/react-native-web/) is fully supported, there are some [incompatibilities in its `StyleSheet` implementation](https://github.com/necolas/react-native-web/issues/1377) to be aware of.

Whirlwind has not yet been tested on [React Native for Windows and macOS](https://microsoft.github.io/react-native-windows/).

## Expo Framework

Whirlwind is 100% compatible with the [Expo Framework](https://expo.io/) and works with both [Expo Go](https://expo.dev/client) and in the [bare workflow](https://docs.expo.dev/bare/exploring-bare-workflow/).

## How About Supporting Plain React?

While it may seem desired to use Whirlwind also in your plain React web projects, it hasn't been designed for that. Regular web pages don't support the same style notation as React Native. CSS is also more powerful than React Native's Yoga layout engine. Pseudo-classes make it possible to achieve more complex and flexible designs with less code. It just wouldn't make sense to backport Whirlwind to plain React. It simply wouldn't be as useful under these conditions.

If you love Whirlwind and look for a similar solution for your plain React web projects, I recommend [Tailwind CSS](https://tailwindcss.com/). It's a great alternative to CSS-in-JS and switching between Whirlwind and Tailwind is easy and straightforward.
