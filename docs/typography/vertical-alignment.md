---
title: Vertical Alignment
parent: Typography
classes:
  name: align
  key: textAlignVertical
  values:
    Auto: 'auto'
    Top: 'top'
    Bottom: 'bottom'
    Center: 'center'
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

`t.align{Position}` is only available on Android.
