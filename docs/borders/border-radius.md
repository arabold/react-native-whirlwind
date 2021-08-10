---
title: Border Radius
parent: Borders
classes:
  name: rounded
  key: borderRadius
  values: { '': 16, None: 0, Sm: 8, Lg: 32, Full: 9999 }
  directions:
    {
      T: { borderTopLeftRadius, borderTopRightRadius },
      R: { borderTopRightRadius, borderBottomRightRadius },
      B: { borderBottomLeftRadius, borderBottomRightRadius },
      L: { borderTopLeftRadius, borderBottomLeftRadius },
      Tl: { borderTopLeftRadius },
      Tr: { borderTopRightRadius },
      Br: { borderBottomRightRadius },
      Bl: { borderBottomLeftRadius },
      S: { borderTopStartRadius, borderBottomStartRadius },
      E: { borderTopEndRadius, borderBottomEndRadius },
      Ts: { borderTopStartRadius },
      Te: { borderTopEndRadius },
      Be: { borderBottomEndRadius },
      Bs: { borderBottomStartRadius }
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
    {%- for direction in page.classes.directions -%}
      {%- for value in page.classes.values -%}
        <tr>
          <td>t.{{ page.classes.name }}{{ direction[0] }}{{ value[0] | capitalize }}</td>
          <td colspan="2">
          {%- for directionItem in direction[1] -%}
            <p>{{ directionItem }}: {{ value[1] }} </p>
          {%- endfor -%}
          </td>
        </tr>
      {%- endfor -%}
    {%- endfor -%}
  </tbody>
</table>
