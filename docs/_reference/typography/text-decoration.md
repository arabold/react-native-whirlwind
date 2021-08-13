---
title: Text Decoration
parent: Typography
classes:
  name: ''
  key: textDecorationLine
  values:
    noUnderline: 'none'
    underline: 'underline'
    lineThrough: 'line-through'
    underlineLineThrough: 'underline line-through'
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
