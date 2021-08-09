import { Platform } from 'react-native';
import theme from '../theme';
export default {
    // Font Family
    // - The default Sans Serif font
    fontSans: { fontWeight: 'normal', fontStyle: 'normal', fontFamily: theme.fontFamilies.sans },
    fontSansItalic: { fontWeight: 'normal', fontStyle: 'normal', fontFamily: theme.fontFamilies.sansItalic },
    fontSansMedium: { fontWeight: 'normal', fontStyle: 'normal', fontFamily: theme.fontFamilies.sansMedium },
    fontSansMediumItalic: { fontWeight: 'normal', fontStyle: 'normal', fontFamily: theme.fontFamilies.sansMediumItalic },
    fontSansBold: { fontWeight: 'normal', fontStyle: 'normal', fontFamily: theme.fontFamilies.sansBold },
    fontSansBoldItalic: { fontWeight: 'normal', fontStyle: 'normal', fontFamily: theme.fontFamilies.sansBoldItalic },
    // - Monospace font
    fontMono: {
        fontFamily: Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'Courier',
        fontWeight: 'normal'
    },
    fontMonoBold: {
        fontFamily: Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'Courier',
        fontWeight: 'bold'
    },
    fontMonoBoldItalic: {
        fontFamily: Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'Courier',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    fontMonoItalic: {
        fontFamily: Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'Courier',
        fontWeight: 'normal',
        fontStyle: 'italic'
    },
    // Font Size
    textXxs: { fontSize: theme.fontSizes.xs2 },
    textXs: { fontSize: theme.fontSizes.xs },
    textSm: { fontSize: theme.fontSizes.sm },
    textBase: { fontSize: theme.fontSizes.base },
    textLg: { fontSize: theme.fontSizes.lg },
    textXl: { fontSize: theme.fontSizes.xl },
    text2xl: { fontSize: theme.fontSizes.xl2 },
    text3xl: { fontSize: theme.fontSizes.xl3 },
    text4xl: { fontSize: theme.fontSizes.xl4 },
    text5xl: { fontSize: theme.fontSizes.xl5 },
    // Font Style
    fontNormal: { fontWeight: 'normal' },
    // Letter Spacing
    trackingTighter: { letterSpacing: -0.8 },
    trackingTight: { letterSpacing: -0.4 },
    trackingNormal: { letterSpacing: 0 },
    trackingWide: { letterSpacing: 0.4 },
    trackingWider: { letterSpacing: 0.8 },
    trackingWidest: { letterSpacing: 1.6 },
    // Line Height
    leadingNone: { lineHeight: 1 * theme.fontSizes.base },
    leadingTight: { lineHeight: 1.25 * theme.fontSizes.base },
    leadingSnug: { lineHeight: 1.375 * theme.fontSizes.base },
    leadingNormal: { lineHeight: 1.5 * theme.fontSizes.base },
    leadingRelaxed: { lineHeight: 1.625 * theme.fontSizes.base },
    leadingLoose: { lineHeight: 2 * theme.fontSizes.base },
    // Text Alignment
    textAuto: { textAlign: 'auto' },
    textLeft: { textAlign: 'left' },
    textRight: { textAlign: 'right' },
    textCenter: { textAlign: 'center' },
    textJustify: { textAlign: 'justify' },
    // Text Colors
    textTransparent: { color: 'transparent' },
    textBlack: { color: theme.colors.black },
    textWhite: { color: theme.colors.white },
    textPrimary: { color: theme.colors.primary },
    textSecondary: { color: theme.colors.secondary },
    textSuccess: { color: theme.colors.success },
    textError: { color: theme.colors.error },
    textWarning: { color: theme.colors.warning },
    textLink: { color: theme.colors.link },
    textGray0: { color: theme.colors.gray0 },
    textGray1: { color: theme.colors.gray1 },
    textGray2: { color: theme.colors.gray2 },
    textGray3: { color: theme.colors.gray3 },
    textGray4: { color: theme.colors.gray4 },
    textGray5: { color: theme.colors.gray5 },
    // Text Decoration
    noUnderline: { textDecorationLine: 'none' },
    underline: { textDecorationLine: 'underline' },
    lineThrough: { textDecorationLine: 'line-through' },
    underlineLineThrough: { textDecorationLine: 'underline line-through' },
    // Text Transform
    normalCase: { textTransform: 'none' },
    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
    // Vertical Alignment (Android)
    alignAuto: { textAlignVertical: 'auto' },
    alignTop: { textAlignVertical: 'top' },
    alignBottom: { textAlignVertical: 'bottom' },
    alignCenter: { textAlignVertical: 'center' }
};
//# sourceMappingURL=typography.js.map