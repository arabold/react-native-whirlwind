---
title: Colors
parent: Core Concepts
classes:
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

Whirlwind uses semantic color names. While this seems counterintuitive considering that Whirlwind uses utility classes instead of semantic class names, this has shown advantageous for several reasons: When developing commercial products in which the application designs are created by a design team, we are typically using a limited set of colors based on an external branding guideline. The use of `primary` and `secondary` as color names allows tweaking the branding without having to go back and change the shade of the colors throughout the codebase again. And the use of a limited set of semantic color names also more easily enforces a consistent set of colors throughout the application.

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
        <td>{{ value[0] | capitalize }}</td>
        <td>{{ value[1] }}</td>
        {%- assign colorValue = value[1] -%}
        {%- if colorValue == 'rgba(0,0,0,0)' -%}
          <td  style="background-size: 24px 24px;background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath fill='rgb(200,200,200)' fill-rule='evenodd' d='M0 0h1v1H0V0zm1 1h1v1H1V1z'/%3E%3C/svg%3E&quot;);"></td>
        {%- else -%}
          <td  style="background-color: {{ colorValue }}"></td>
        {%- endif -%}
      </tr>
    {%- endfor -%}
  </tbody>
</table>
