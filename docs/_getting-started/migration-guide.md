---
title: Migration Guide
nav_order: 3
---

# Migration Guide

## Migrating from Tailwind CSS

### Class Names

Tailwind CSS uses `-` (dash) to separate words in class names, while Whirlwind uses `camelCasing`:

| Tailwind CSS | Whirlwind  |
| ------------ | ---------- |
| border-t-2   | t.borderT2 |

This also affects directional attributes, which become capitalized:

| Tailwind CSS | Whirlwind |
| ------------ | --------- |
| pt-4         | t.pT4     |

A `-` (dash) at the beginning of a class (e.g. indicating a negative margin) becomes a `_` (underscore):

| Tailwind CSS | Whirlwind |
| ------------ | --------- |
| -mt-4        | t.\_mT4   |

A `.` (period/decimal point) and `/` (forward/fraction slash) in numbers become `_` (underscore) as well:

| Tailwind CSS | Whirlwind |
| ------------ | --------- |
| m-0.5        | t.m0_5    |
| w-3/6        | t.w3_6    |

### Special Note on `react-native-tailwindcss`

Migration from `react-native-tailwindcss` to `react-native-whirlwind` is very straightforward as most of the class names are compatible between both frameworks.

### Colors

Whirlwind does not define the same colors as Tailwind CSS. Instead of offering various hues of red, blue, green, etc., Whirlwind uses semantic color names:

- `primary`
- `secondary`
- `link`
- `info`
- `success`
- `error`
- `warning`
- `disabled`

| Tailwind CSS   | Whirlwind       |
| -------------- | --------------- |
| text-{color}   | t.text{Color}   |
| bg-{color}     | t.bg{Color}     |
| border-{color} | t.border{Color} |

Refer to the [Colors](./colors.md) page for more information.
