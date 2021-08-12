---
title: Flex Direction
parent: Flexbox
nav_order: 1
classes:
  name: flex
  key: flexDirection
  values:
    Col: 'column'
    Row: 'row'
    ColReverse: 'column-reverse'
    RowReverse: 'row-reverse'
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
