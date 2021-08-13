---
title: Justify Content
parent: Flexbox
classes:
  name: justify
  key: justifyContent
  values:
    Start: 'flex-start'
    End: 'flex-end'
    Center: 'center'
    Stretch: 'stretch'
    Baseline: 'baseline'
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
