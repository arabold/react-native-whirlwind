---
title: Z-Index
parent: Layouts
nav_order: 7
classes:
  name: z
  key: zIndex
  values:
    0: 0
    10: 10
    20: 20
    30: 30
    40: 40
    50: 50
---

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    {%- for value in page.classes.values -%}
      <tr>
        <td>t.{{ page.classes.name }}{{ value[0] }}</td>
        <td>{{ page.classes.key }}: {{ value[1] }}</td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

`zIndex` controls which components display on top of others.
