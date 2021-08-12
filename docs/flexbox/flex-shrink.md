---
title: Flex Shrink
parent: Flexbox
nav_order: 2
classes:
  name: flexShrink
  key: flexShrink
  values: { '': 1, 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
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
