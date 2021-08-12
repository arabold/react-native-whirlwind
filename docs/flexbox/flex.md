---
title: Flex
parent: Flexbox
nav_order: 0
classes:
  name: flex
  key: flex
  values: { None: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
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
