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
  fontSerif: theme.fontFamilies.serif ? { fontFamily: theme.fontFamilies.serif } : { fontFamily: defaultSerif },
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
  textXxs: { fontSize: theme.fontSizes['2xs'] },
  textXs: { fontSize: theme.fontSizes.xs },
  textSm: { fontSize: theme.fontSizes.sm },
  textBase: { fontSize: theme.fontSizes.base },
  textLg: { fontSize: theme.fontSizes.lg },
  textXl: { fontSize: theme.fontSizes.xl },
  text2xl: { fontSize: theme.fontSizes['2xl'] },
  text3xl: { fontSize: theme.fontSizes['3xl'] },
  text4xl: { fontSize: theme.fontSizes['4xl'] },
  text5xl: { fontSize: theme.fontSizes['5xl'] },
  // Font Style
  fontNormal: { fontWeight: 'normal' },
  // Letter Spacing
  trackingTighter: { letterSpacing: theme.letterSpacing.tighter },
  trackingTight: { letterSpacing: theme.letterSpacing.tight },
  trackingNormal: { letterSpacing: theme.letterSpacing.normal },
  trackingWide: { letterSpacing: theme.letterSpacing.wide },
  trackingWider: { letterSpacing: theme.letterSpacing.wider },
  trackingWidest: { letterSpacing: theme.letterSpacing.widest },
  // Line Height
  leadingNone: { lineHeight: theme.leading.none * theme.fontSizes.base },
  leadingTight: { lineHeight: theme.leading.tight * theme.fontSizes.base },
  leadingSnug: { lineHeight: theme.leading.snug * theme.fontSizes.base },
  leadingNormal: { lineHeight: theme.leading.normal * theme.fontSizes.base },
  leadingRelaxed: { lineHeight: theme.leading.relaxed * theme.fontSizes.base },
  leadingLoose: { lineHeight: theme.leading.loose * theme.fontSizes.base },
  // Text Alignment
  textAuto: { textAlign: 'auto' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  textCenter: { textAlign: 'center' },
  textJustify: { textAlign: 'justify' },
  // Text Colors
  textPrimary: { color: theme.colors.primary },
  textPrimaryLight: { color: theme.colors.primaryLight },
  textPrimaryDark: { color: theme.colors.primaryDark },
  textPrimaryContrast: { color: theme.colors.primaryContrast },
  textSecondary: { color: theme.colors.secondary },
  textSecondaryLight: { color: theme.colors.secondaryLight },
  textSecondaryDark: { color: theme.colors.secondaryDark },
  textSecondaryContrast: { color: theme.colors.secondaryContrast },
  textInfo: { color: theme.colors.info },
  textInfoLight: { color: theme.colors.infoLight },
  textInfoDark: { color: theme.colors.infoDark },
  textInfoContrast: { color: theme.colors.infoContrast },
  textSuccess: { color: theme.colors.success },
  textSuccessLight: { color: theme.colors.successLight },
  textSuccessDark: { color: theme.colors.successDark },
  textSuccessContrast: { color: theme.colors.successContrast },
  textError: { color: theme.colors.error },
  textErrorLight: { color: theme.colors.errorLight },
  textErrorDark: { color: theme.colors.errorDark },
  textErrorContrast: { color: theme.colors.errorContrast },
  textWarning: { color: theme.colors.warning },
  textWarningLight: { color: theme.colors.warningLight },
  textWarningDark: { color: theme.colors.warningDark },
  textWarningContrast: { color: theme.colors.warningContrast },
  textPaper: { color: theme.colors.paper },
  textSelected: { color: theme.colors.selected },
  textDisabled: { color: theme.colors.disabled },
  textFocused: { color: theme.colors.focused },
  textMuted: { color: theme.colors.muted },
  textWhite: { color: theme.colors.white },
  textGray100: { color: theme.colors.gray100 },
  textGray200: { color: theme.colors.gray200 },
  textGray300: { color: theme.colors.gray300 },
  textGray400: { color: theme.colors.gray400 },
  textGray500: { color: theme.colors.gray500 },
  textGray600: { color: theme.colors.gray600 },
  textGray700: { color: theme.colors.gray700 },
  textGray800: { color: theme.colors.gray800 },
  textGray900: { color: theme.colors.gray900 },
  textBlack: { color: theme.colors.black },
  textTransparent: { color: theme.colors.transparent },
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
