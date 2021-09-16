---
title: Line Height
parent: Typography
classes:
  name: leading
  key: lineHeight
  relativeValues:
    None: 16
    Tight: 20
    Snug: 22
    Normal: 24
    Relaxed: 26
    Loose: 32
  fixedValues:
    3: 12
    4: 16
    5: 20
    6: 24
    7: 28
    8: 32
    9: 36
    10: 40
  moreValues:
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
---

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    {%- for value in page.classes.relativeValues -%}
      <tr>
        <td>t.{{ page.classes.name }}{{ value[0] }}</td>
        <td>{{ page.classes.key }}: {{ value[1] }}</td>
      </tr>
    {%- endfor -%}
    {%- for value in page.classes.fixedValues -%}
      <tr>
        <td>t.{{ page.classes.name }}{{ value[0] }}</td>
        <td>{{ page.classes.key }}: {{ value[1] }}</td>
      </tr>
    {%- endfor -%}
    {%- for value in page.classes.moreValues -%}
      <tr>
        <td>t.{{ page.classes.name }}{{ value[0] }}</td>
        <td>{{ page.classes.key }}: {{ value[1] }}</td>
      </tr>
    {%- endfor -%}
  </tbody>
</table>

## Usage

Set the line height of a `Text` element using the <code>t.leading{Size}</code> utility classes.

## Relative Line-Heights

Use the `leadingNone`, `leadingTight`, `leadingSnug`, `leadingNormal`, `leadingRelaxed`, and `leadingLoose` utilities to give an element a relative line-height based on the font size. This is provided for compatibility with Tailwind CSS, but due to limitations in React Native, the line height is always based on the _base_ font size, not relative to the specified font size. Hence, this is mainly suitable for text bodies that use the default typography settings.

<div>
{%- for value in page.classes.relativeValues -%}
  <div class="mt-1 highlighter-rouge">
    <code class="language-plaintext highlighter-rouge">
      &lt;Text style={[ t.{{ page.classes.name }}{{ value[0] }} ]}>...&lt;/Text>
    </code>
    <p class="mt-1 mb-0" style="font-size: 16px; line-height:{{ value[1] }}px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
{%- endfor -%}
</div>

## Fixed Line-Heights

Use the `leading{Size}` utilities to give an element a fixed line height, irrespective of the current font size. These are useful when you need very precise control over an element’s final size. The actual size is derived from the `spacing` theme property.

<div>
{%- for value in page.classes.fixedValues -%}
  <div class="mt-1 highlighter-rouge">
    <code class="language-plaintext highlighter-rouge">
      &lt;Text style={[ t.{{ page.classes.name }}{{ value[0] }} ]}>...&lt;/Text>
    </code>
    <p class="mt-1 mb-0" style="font-size: 16px; line-height:{{ value[1] }}px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
{%- endfor -%}
</div>
