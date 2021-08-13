---
title: 'Background Color'
parent: 'Background'
classes:
  name: bg
  key: backgroundColor
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
        {%- if value[1] == 'rgba(0,0,0,0)' -%}
          <td style="background-size: 24px 24px;background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath fill='rgb(200,200,200)' fill-rule='evenodd' d='M0 0h1v1H0V0zm1 1h1v1H1V1z'/%3E%3C/svg%3E&quot;);"></td>
        {%- else -%}
          <td style="background-color: {{ value[1] }}"></td>
        {%- endif -%}
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the background color of an element using the <code>t.bg{Color}</code> utility classes.
