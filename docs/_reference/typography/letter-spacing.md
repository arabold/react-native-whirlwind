---
title: Letter Spacing
parent: Typography
classes:
  name: tracking
  key: letterSpacing
  values:
    Tighter: -0.8
    Tight: -0.4
    Normal: 0
    Wide: 0.4
    Wider: 0.8
    Widest: 1.6
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
