import { Platform } from 'react-native'
import { createStyles } from '../theme'

const defaultSans = Platform.OS === 'android' ? 'Roboto' : Platform.OS === 'ios' ? 'HelveticaNeue' : 'Helvetica'
const defaultMono = Platform.OS === 'android' ? 'monospace' : Platform.OS === 'ios' ? 'Menlo' : 'Courier'
const defaultSerif = Platform.OS === 'android' ? 'serif' : Platform.OS === 'ios' ? 'Georgia' : 'Georgia'

export default createStyles(theme => ({
  // Font Family
  // - The default Sans Serif font
  fontSans: theme.fontFamilies.sans ? { fontFamily: theme.fontFamilies.sans } : { fontFamily: defaultSans },
  fontSansItalic: theme.fontFamilies.sansItalic
    ? { fontFamily: theme.fontFamilies.sansItalic }
    : { fontStyle: 'italic', fontFamily: defaultSans },
  fontSansMedium: theme.fontFamilies.sansMedium
    ? { fontFamily: theme.fontFamilies.sansMedium }
    : { fontWeight: '500', fontFamily: defaultSans },
  fontSansMediumItalic: theme.fontFamilies.sansMediumItalic
    ? { fontFamily: theme.fontFamilies.sansMediumItalic }
    : { fontWeight: '500', fontStyle: 'italic', fontFamily: defaultSans },
  fontSansBold: theme.fontFamilies.sansBold
    ? { fontFamily: theme.fontFamilies.sansBold }
    : { fontWeight: 'bold', fontFamily: defaultSans },
  fontSansBoldItalic: theme.fontFamilies.sansBoldItalic
    ? { fontFamily: theme.fontFamilies.sansBoldItalic }
    : { fontWeight: 'bold', fontStyle: 'italic', fontFamily: defaultSans },
  // - Monospace font
  fontMono: theme.fontFamilies.mono ? { fontFamily: theme.fontFamilies.mono } : { fontFamily: defaultMono },
  fontMonoItalic: theme.fontFamilies.monoItalic
    ? { fontFamily: theme.fontFamilies.monoItalic }
    : { fontStyle: 'italic', fontFamily: defaultMono },
  fontMonoMedium: theme.fontFamilies.monoMedium
    ? { fontFamily: theme.fontFamilies.monoMedium }
    : { fontWeight: '500', fontFamily: defaultMono },
  fontMonoMediumItalic: theme.fontFamilies.monoMediumItalic
    ? { fontFamily: theme.fontFamilies.monoMediumItalic }
    : { fontWeight: '500', fontStyle: 'italic', fontFamily: defaultMono },
  fontMonoBold: theme.fontFamilies.monoBold
    ? { fontFamily: theme.fontFamilies.monoBold }
    : { fontWeight: 'bold', fontFamily: defaultMono },
  fontMonoBoldItalic: theme.fontFamilies.monoBoldItalic
    ? { fontFamily: theme.fontFamilies.monoBoldItalic }
    : { fontWeight: 'bold', fontStyle: 'italic', fontFamily: defaultMono },
  // - Serif font
  fontSerif: theme.fontFamilies.mono ? { fontFamily: theme.fontFamilies.serif } : { fontFamily: defaultSerif },
  fontSerifItalic: theme.fontFamilies.serifItalic
    ? { fontFamily: theme.fontFamilies.serifItalic }
    : { fontStyle: 'italic', fontFamily: defaultSerif },
  fontSerifMedium: theme.fontFamilies.serifMedium
    ? { fontFamily: theme.fontFamilies.serifMedium }
    : { fontWeight: '500', fontFamily: defaultSerif },
  fontSerifMediumItalic: theme.fontFamilies.serifMediumItalic
    ? { fontFamily: theme.fontFamilies.serifMediumItalic }
    : { fontWeight: '500', fontStyle: 'italic', fontFamily: defaultSerif },
  fontSerifBold: theme.fontFamilies.serifBold
    ? { fontFamily: theme.fontFamilies.serifBold }
    : { fontWeight: 'bold', fontFamily: defaultSerif },
  fontSerifBoldItalic: theme.fontFamilies.serifBoldItalic
    ? { fontFamily: theme.fontFamilies.serifBoldItalic }
    : { fontWeight: 'bold', fontStyle: 'italic', fontFamily: defaultSerif },
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
}))
