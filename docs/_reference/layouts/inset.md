---
title: Inset
parent: Layouts
nav_order: 5
classes:
  name: inset
  values:
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
    '1_2': '50%'
    '1_3': '33.333333%'
    '2_3': '66.666667%'
    '1_4': '25%'
    '2_4': '50%'
    '3_4': '75%'
    '1_5': '20%'
    '2_5': '40%'
    '3_5': '60%'
    '4_5': '80%'
    '1_6': '16.666667%'
    '2_6': '33.333333%'
    '3_6': '50%'
    '4_6': '66.666667%'
    '5_6': '83.333333%'
    'Full': '100%'
  sides:
    '': [top, right, bottom, left]
    'X': [left, right]
    'Y': [top, bottom]
  signs:
    '': ''
    '_': '-'
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
      {%- for side in page.classes.sides -%}
        {%- for sign in page.classes.signs -%}
          <tr>
            <td>t.{{ sign[0] }}{{ page.classes.name }}{{ side[0] }}{{ value[0] }}</td>
            <td>
            {%- for sideProp in side[1] -%}
              <p>{{ sideProp }}: {% if value[1] contains '%' %}'{% endif %}{{ sign[1] }}{{ value[1] }}{% if value[1] contains '%' %}'{% endif %}</p>
            {%- endfor -%}
            </td>
          </tr>
        {%- endfor -%}
      {%- endfor -%}
    {%- endfor -%}
  </tbody>
</table>
