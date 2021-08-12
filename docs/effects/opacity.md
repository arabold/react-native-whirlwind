---
title: Opacity
parent: Effects
classes:
  name: opacity
  key: opacity
  values:
    {
      100: 1,
      90: 0.9,
      80: 0.8,
      75: 0.75,
      70: 0.7,
      60: 0.6,
      50: 0.5,
      40: 0.4,
      30: 0.3,
      25: 0.25,
      20: 0.2,
      10: 0.1,
      0: 0
    }
---

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th colspan="2">Properties</th>
    </tr>
  </thead>
  <tbody>
    {%- for value in page.classes.values -%}
      <tr>
        <td>t.{{ page.classes.name }}{{ value[0] }}</td>
        <td>{{ page.classes.key }}: {{ value[1] }}</td>
        <td style="background-color: black; opacity: {{ value[1] }}; color: white; text-align: center">{{ value[1] | times: 100 }}%</td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the opacity of an element using the <code>t.opacity{Value}</code> utility classes.
