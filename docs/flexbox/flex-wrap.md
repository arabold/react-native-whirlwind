---
title: Flex Wrap
parent: Flexbox
nav_order: 3
classes:
  name: flex
  key: flexWrap
  values:
    Wrap: 'wrap'
    WrapReverse: 'wrap-reverse'
    NoWrap: 'nowrap'
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
