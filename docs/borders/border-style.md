---
title: Border Style
parent: Borders
classes:
  name: border
  key: borderStyle
  values:
    Solid: 'solid'
    Dashed: 'dashed'
    Dotted: 'dotted'
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
        {%- assign styleValue = value[1] -%}
        <td><div style="border-width: 2px; border-style: {{ styleValue }}; border-color: black; height: 20px"></div></td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the border style of an element using the <code>t.border{Style}</code> utility classes.
