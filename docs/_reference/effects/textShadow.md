---
title: Text Shadow
parent: Effects
# prettier-ignore
classes:
  name: textShadow
  values: {
    '': {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'",
      textShadowOffset: '{ width: 0, height: 1 }',
      textShadowRadius: 3
    },
    Md: {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'",
      textShadowOffset: '{ width: 0, height: 4 }',
      textShadowRadius: 6
    },
    Lg: {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'",
      textShadowOffset: '{ width: 0, height: 10 }',
      textShadowRadius: 15
    },
    Xl: {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'",
      textShadowOffset: '{ width: 0, height: 20 }',
      textShadowRadius: 25
    },
    2xl: {
      textShadowColor: "'rgba(0, 0, 0, 0.25)'",
      textShadowOffset: '{ width: 0, height: 25 }',
      textShadowRadius: 50
    },
    Inner: {
      textShadowColor: "'rgba(0, 0, 0, 0.06)'",
      textShadowOffset: '{ width: 0, height: 2 }',
      textShadowRadius: 4
    },
    Outline: {
      textShadowColor: "'rgba(0, 0, 0, 1.0)'",
      textShadowOffset: '{ width: 0, height: 0 }',
      textShadowRadius: 3
    },
    None: {
      textShadowColor: "'rgba(0, 0, 0, 0)'",
      textShadowOffset: '{ width: 0, height: 0 }',
      textShadowRadius: 0
    },
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
        <td colspan="2">
          {%- for valueItem in value[1] -%}
            <p>{{ valueItem[0] }}: {{ valueItem[1] }} </p>
          {%- endfor -%}
        </td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>
