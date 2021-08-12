---
title: Resize Mode
parent: Layouts
nav_order: 3
classes:
  name: ''
  key: resizeMode
  values:
    resizeContain: 'contain'
    resizeCover: 'cover'
    resizeStretch: 'stretch'
    resizeCenter: 'center'
    resizeRepeat: 'repeat'
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

In React Native the `reziseMode` property is used to control how the contents of an image are scaled to fit the image's container. It is the equivalent of the `object-fit` CSS property.
