---
title: 'Border Color'
description: "Control an element's border color."
classes:
  name: border
  key: borderColor
  values:
    {
      black: '#000000',
      white: '#ffffff',
      primary: '#007bff',
      secondary: '#6c757d',
      link: '#007bff',
      info: '#17a2b8',
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      disabled: '#6c757d',
      gray100: '#f7fafc',
      gray200: '#edf2f7',
      gray300: '#e2e8f0',
      gray400: '#cbd5e0',
      gray500: '#a0aec0',
      gray600: '#718096',
      gray700: '#4a5568',
      gray800: '#2d3748',
      gray900: '#1a202c',
      transparent: 'rgba(0,0,0,0)'
    }
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
        <td><span>t</span>.{{ page.classes.name }}{{ value[0] | capitalize }}</td>
        <td>{{ page.classes.key }}: '{{ value[1] }}'</td>
        {%- assign colorValue = value[1] -%}
        <td><div style="border: 1px solid {{ colorValue }}; height: 20px"></div></td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the border color of an element using the <code>t.border{Color}</code> utility classes.
