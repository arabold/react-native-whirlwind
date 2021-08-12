---
title: Font Size
parent: Typography
nav_order: 1
classes:
  name: text
  key: fontSize
  values:
    2xs: 8
    Xs: 12
    Sm: 14
    Base: 16
    Lg: 18
    Xl: 20
    2xl: 24
    3xl: 30
    4xl: 36
    5xl: 48
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
