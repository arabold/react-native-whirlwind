---
title: Font Family
parent: Typography
nav_order: 0
classes:
  name: font
  key: fontFamily
  values:
    Sans: { android: 'Roboto', ios: 'HelveticaNeue', web: 'Helvetica' }
    Mono: { android: 'monospace', ios: 'Menlo', web: 'Courier' }
    Serif: { android: 'serif', ios: 'Georgia', web: 'Georgia' }
  styles:
    '': {}
    Italic: { fontStyle: 'italic' }
    Medium: { fontWeight: '500' }
    MediumItalic: { fontWeight: '500', fontStyle: 'italic' }
    Bold: { fontWeight: 'bold' }
    BoldItalic: { fontWeight: 'bold', fontStyle: 'italic' }
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
      {%- for style in page.classes.styles -%}
        <tr>
          <td>t.{{ page.classes.name }}{{ value[0] }}{{ style[0] }}</td>
          <td>
            {%- for platform in value[1] -%}
              <p>{{ page.classes.key }}: '{{ platform[1] }}' <span class="label label-yellow">{{ platform[0] }}</span></p>
            {%- endfor -%}
            {%- for attr in style[1] -%}
              <p>{{ attr[0] }}: '{{ attr[1] }}'</p>
            {%- endfor -%}
          </td>
        </tr>
      {%- endfor -%}
    {%- endfor -%}
  </tbody>
</table>
