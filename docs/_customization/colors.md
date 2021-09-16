---
title: Colors
nav_order: 2
classes:
  values:
    Primary: '#3f51b5'
    PrimaryLight: '#7986cb'
    PrimaryDark: '#303f9f'
    PrimaryContrast: '#fff'
    Secondary: '#f50057'
    SecondaryLight: '#ff4081'
    SecondaryDark: '#c51162'
    SecondaryContrast: '#fff'
    Info: '#2196f3'
    InfoLight: '#64b5f6'
    InfoDark: '#1976d2'
    InfoContrast: '#fff'
    Success: '#4caf50'
    SuccessLight: '#81c784'
    SuccessDark: '#388e3c'
    SuccessContrast: 'rgba(0,0,0,0.87)'
    Error: '#f44336'
    ErrorLight: '#e57373'
    ErrorDark: '#d32f2f'
    ErrorContrast: '#fff'
    Warning: '#ff9800'
    WarningLight: '#ffb74d'
    WarningDark: '#f57c00'
    WarningContrast: 'rgba(0,0,0,0.87)'
    Paper: '#fafafa'
    Selected: 'rgba(0,0,0,0.08)'
    Disabled: 'rgba(0,0,0,0.26)'
    Focused: 'rgba(0,0,0,0.12)'
    Muted: 'rgba(0,0,0,0.12)'
    White: '#ffffff'
    Gray100: '#f7fafc'
    Gray200: '#edf2f7'
    Gray300: '#e2e8f0'
    Gray400: '#cbd5e0'
    Gray500: '#a0aec0'
    Gray600: '#718096'
    Gray700: '#4a5568'
    Gray800: '#2d3748'
    Gray900: '#1a202c'
    Black: '#000000'
    Transparent: 'rgba(0,0,0,0)'
---

# Colors

Whirlwind uses semantic color names. While this seems counterintuitive considering that Whirlwind uses utility classes instead of semantic class names, this has shown advantageous for several reasons: When developing commercial products in which the application designs are created by a design team, we are typically using a limited set of colors based on an external branding guideline. The use of `primary` and `secondary` as color names allows tweaking the branding without having to go back and change the shade of the colors throughout the codebase again. And the use of a limited set of semantic color names also more easily enforces a consistent set of colors throughout the application.

The default palette is inspired by [Material UI](https://material-ui.com/).

<table>
  <thead>
    <tr>
      <th>Color Name</th>
      <th colspan="2">Color Value</th>
    </tr>
  </thead>
  <tbody>
    {%- for value in page.classes.values -%}
      <tr>
        <td>{{ value[0] }}</td>
        <td>'{{ value[1] }}'</td>
        <td style="min-width: 38px; width: 38px; padding: 0; background-size: 24px 24px;background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath fill='rgb(200,200,200)' fill-rule='evenodd' d='M0 0h1v1H0V0zm1 1h1v1H1V1z'/%3E%3C/svg%3E&quot;);">
          <div style="background-color: {{ value[1] }}; height: 38px; width: 100%"></div>
        </td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Flavors

Most colors come in four flavors: the default or main variant, a _light_ variant, a _dark_ variant, and a _contrast_ variant. The light and dark variants can be useful for using as background and border colors respectively. The contrast variants can be useful as text colors and should always have a high contrast compared to the base color for better readability.

Ultimately it's up to you to decide which colors to use, but I recommend creating a branding guideline defining which color is used for which part of a component, that you can use as a reference for your product. If you are using a UI component library such as [React Native Elements](https://reactnativeelements.com/), I recommend to spend some time defining the base theme, to avoid styling every individual instance of a component. See [Integration](../core-concepts/integrations) for examples.

## Example

#### Source Code

```tsx
<View style={[t.backgroundWarningLight, t.borderWarningDark, t.border, t.rounded, t.p2]}>
  <Text style={[t.textWarningContrast]}>Warning Message</Text>
</View>
```

#### Result

<div style="background-color: #ffb74d; border-color: #f57c00; border-width: 1px; border-style: solid; border-radius: 8px; padding: 8px;">
  <div style="color: rgba(0,0,0,0.87)">Warning Message</div>
</div>
