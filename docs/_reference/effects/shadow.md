---
title: Shadow
parent: Effects
# prettier-ignore
classes:
  name: shadow
  values: {
    '': {
      shadowColor: "'rgba(0, 0, 0, 0.1)'",
      shadowOffset: '{ width: 0, height: 1 }',
      shadowRadius: 3,
      elevation: 1.5
    },
    Md: {
      shadowColor: "'rgba(0, 0, 0, 0.1)'",
      shadowOffset: '{ width: 0, height: 4 }',
      shadowRadius: 6,
      elevation: 3
    },
    Lg: {
      shadowColor: "'rgba(0, 0, 0, 0.1)'",
      shadowOffset: '{ width: 0, height: 10 }',
      shadowRadius: 15,
      elevation: 7.5
    },
    Xl: {
      shadowColor: "'rgba(0, 0, 0, 0.1)'",
      shadowOffset: '{ width: 0, height: 20 }',
      shadowRadius: 25,
      elevation: 12.5
    },
    2xl: {
      shadowColor: "'rgba(0, 0, 0, 0.25)'",
      shadowOffset: '{ width: 0, height: 25 }',
      shadowRadius: 50,
      elevation: 25
    },
    Inner: {
      shadowColor: "'rgba(0, 0, 0, 0.06)'",
      shadowOffset: '{ width: 0, height: 2 }',
      shadowRadius: 4,
      elevation: 2
    },
    Outline: {
      shadowColor: "'rgba(66, 153, 225, 0.5)'",
      shadowOffset: '{ width: 0, height: 0 }',
      shadowRadius: 0,
      elevation: 0
    },
    None: {
      shadowColor: "'rgba(0, 0, 0, 0)'",
      shadowOffset: '{ width: 0, height: 0 }',
      shadowRadius: 0,
      elevation: 0
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
