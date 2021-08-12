---
title: Display
parent: Layouts
nav_order: 0
classes:
  name: display
  key: display
  values:
    None: 'none'
    Flex: 'flex'
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

## Usage

In React Native all elements use `flex` layout by default.
