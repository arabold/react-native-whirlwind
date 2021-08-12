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
        <td style="padding: 0; background-size: 24px 24px;background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath fill='rgb(200,200,200)' fill-rule='evenodd' d='M0 0h1v1H0V0zm1 1h1v1H1V1z'/%3E%3C/svg%3E&quot;);">
          <div style="height: 38px; background-color: black; opacity: {{ value[1] }}; color: white; text-align: center; font-size: 1.5em; font-weight: bold">Aa</div>
        </td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the opacity of an element using the <code>t.opacity{Value}</code> utility classes.
