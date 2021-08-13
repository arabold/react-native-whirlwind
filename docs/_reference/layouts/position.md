---
title: Position
parent: Layouts
nav_order: 2
classes:
  name: ''
  key: position
  values:
    relative: 'relative'
    absolute: 'absolute'
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

`position` in React Native is similar to regular CSS, but everything is set to `relative` by default, so `absolute` positioning is always relative to the parent.

See https://github.com/facebook/yoga for more details on how position differs between React Native and CSS.
