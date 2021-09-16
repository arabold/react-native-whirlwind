---
title: Fonts
nav_order: 3
---

# Fonts

React Native [is not able to mix a custom `fontFamily` with different weights and styles](https://reactnative.dev/docs/text#limited-style-inheritance). The trick is to use different fonts that already have the different styles baked in and omit the `fontWeight` and `fontStyle` attributes.

To make the use of custom fonts in React Native easier, **Whirlwind** provides font classes that you can use to set the font family and weight for your components:

### Sans-Serif Font

```
t.fontSans
t.fontSansItalic
t.fontSansMedium
t.fontSansMediumItalic
t.fontSansBold
t.fontSansBoldItalic
```

### Monoscript Font

```
t.fontMono
t.fontMonoItalic
t.fontMonoMedium
t.fontMonoMediumItalic
t.fontMonoBold
t.fontMonoBoldItalic
```

### Serif Font

```
t.fontSerif
t.fontSerifItalic
t.fontSerifMedium
t.fontSerifMediumItalic
t.fontSerifBold
t.fontSerifBoldItalic
```

Those classes are composable with font sizes, text color, and other typography-related classes as usual:

```tsx
<Text style={[t.fontSansMedium, t.textXl, t.textPrimary, t.uppercase]}>
  Custom Header
<Text>
```

## Custom Fonts

Download the custom font family you need, for example from [Google Fonts](https://fonts.google.com/). This will download a set of files, typically `.ttf` files following a naming convention similar to the one below:

```
{fontFamilyName}
{fontFamilyName}-Italic
{fontFamilyName}-Medium
{fontFamilyName}-MediumItalic
{fontFamilyName}-Bold
{fontFamilyName}-BoldItalic
```

Now, in your `theme.tsx`, set the respective font family as follows:

```tsx
// theme.tsx
import { createTheme } from 'react-native-whirlwind'

const t = createTheme({
  fontFamilies: {
    sans: '{fontFamilyName}',
    sansItalic: '{fontFamilyName}-Italic',
    sansMedium: '{fontFamilyName}-Medium',
    sansMediumItalic: '{fontFamilyName}-MediumItalic',
    sansBold: '{fontFamilyName}-Bold',
    sansBoldItalic: '{fontFamilyName}-BoldItalic'
  }
})

export default t
```

This works for sans serif, serif, and monoscript fonts. However, you should only customize the fonts you need as each included `.ttf` file will add additional weight to your app.
