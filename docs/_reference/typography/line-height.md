---
title: Line Height
parent: Typography
classes:
  name: leading
  key: lineHeight
  values:
    None: 16
    Tight: 20
    Snug: 22
    Normal: 24
    Relaxed: 26
    Loose: 32
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
