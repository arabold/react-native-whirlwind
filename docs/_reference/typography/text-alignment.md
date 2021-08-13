---
title: Text Alignment
parent: Typography
classes:
  name: text
  key: textAlign
  values:
    Auto: 'auto'
    Left: 'left'
    Right: 'right'
    Center: 'center'
    Justify: 'justify'
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
        <td>{{ page.classes.key }}: '{{ value[1] }}'</td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>
