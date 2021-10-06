---
title: Padding
parent: Spacing
nav_order: 0
classes:
  name: p
  key: padding
  values:
    'Auto': "'auto'"
    'Px': 1
    0: 0
    '0_5': 2
    1: 4
    2: 8
    3: 12
    4: 16
    5: 20
    6: 24
    7: 28
    8: 32
    9: 36
    10: 40
    11: 44
    12: 48
    14: 56
    16: 64
    20: 80
    24: 96
    28: 112
    32: 128
    36: 144
    40: 160
    44: 176
    48: 192
    52: 208
    56: 224
    60: 240
    64: 256
    72: 288
    80: 320
    96: 384
  directions:
    '': { '' }
    X: { Horizontal }
    Y: { Vertical }
    T: { Top }
    R: { Right }
    B: { Bottom }
    L: { Left }
    E: { End }
    S: { Start }
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
      {%- for direction in page.classes.directions -%}
        <tr>
          <td>t.{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
          <td>
            {%- for attr in direction[1] -%}
              <p>{{ page.classes.key }}{{ attr }}: {{ value[1] }}</p>
            {%- endfor -%}
          </td>
        </tr>
      {%- endfor -%}
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the padding of an element using the <code>t.p{Direction}{Width}</code> utility classes. To set a negative padding use <code>t.\_p{Direction}{Width}</code>.
