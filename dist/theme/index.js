import defaultTheme from './defaultTheme';
let theme = defaultTheme;
export function setTheme(newTheme) {
    theme = {
        ...newTheme,
        colors: { ...defaultTheme.colors, ...(newTheme?.colors ?? {}) },
        fontFamilies: { ...defaultTheme.fontFamilies, ...(newTheme?.fontFamilies ?? {}) },
        fontSizes: { ...defaultTheme.fontSizes, ...(newTheme?.fontSizes ?? {}) },
        spacing: { ...defaultTheme.spacing, ...(newTheme?.spacing ?? {}) }
    };
}
export default theme;
//# sourceMappingURL=index.js.map