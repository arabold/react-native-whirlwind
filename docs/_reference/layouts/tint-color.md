---
title: Tint Color
parent: Layouts
nav_order: 6
classes:
  name: tint
  key: tintColor
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

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th colspan="2">Properties</th>
    </tr>
  </thead>
  <tbody>
    {%- for value in page.classes.values -%}
      <tr>
        <td>t.{{ page.classes.name }}{{ value[0] }}</td>
        <td>{{ page.classes.key }}: '{{ value[1] }}'</td>
        <td style="background-color: {{ value[1] }}"></td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Changes the color of all the non-transparent pixels of an `Image` to the `tintColor`.
