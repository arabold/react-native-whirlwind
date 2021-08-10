---
title: Border Width
parent: Borders
description: "Control an element's border width."
classes:
  name: border
  key: borderWidth
  values:
    [
      ['', '1'],
      ['0', '0'],
      ['0_5', '2'],
      ['1', '4'],
      ['2', '8'],
      ['3', '12'],
      ['4', '16'],
      ['5', '20'],
      ['6', '24'],
      ['7', '28'],
      ['8', '32']
    ]
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
    {%- for value in page.classes.values -%}
      {%- for direction in page.classes.directions -%}
        <tr>
          <td>t.{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
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
