import { ViewStyle } from 'react-native'
import { CreateStylesFunc } from '../theme'

export default createBackgroundColorStyles(({ colors }) => ({
  bgPrimary: { backgroundColor: colors.primary },
  bgPrimaryLight: { backgroundColor: colors.primaryLight },
  bgPrimaryDark: { backgroundColor: colors.primaryDark },
  bgPrimaryContrast: { backgroundColor: colors.primaryContrast },
  bgSecondary: { backgroundColor: colors.secondary },
  bgSecondaryLight: { backgroundColor: colors.secondaryLight },
  bgSecondaryDark: { backgroundColor: colors.secondaryDark },
  bgSecondaryContrast: { backgroundColor: colors.secondaryContrast },
  bgInfo: { backgroundColor: colors.info },
  bgInfoLight: { backgroundColor: colors.infoLight },
  bgInfoDark: { backgroundColor: colors.infoDark },
  bgInfoContrast: { backgroundColor: colors.infoContrast },
  bgSuccess: { backgroundColor: colors.success },
  bgSuccessLight: { backgroundColor: colors.successLight },
  bgSuccessDark: { backgroundColor: colors.successDark },
  bgSuccessContrast: { backgroundColor: colors.successContrast },
  bgError: { backgroundColor: colors.error },
  bgErrorLight: { backgroundColor: colors.errorLight },
  bgErrorDark: { backgroundColor: colors.errorDark },
  bgErrorContrast: { backgroundColor: colors.errorContrast },
  bgWarning: { backgroundColor: colors.warning },
  bgWarningLight: { backgroundColor: colors.warningLight },
  bgWarningDark: { backgroundColor: colors.warningDark },
  bgWarningContrast: { backgroundColor: colors.warningContrast },
  bgPaper: { backgroundColor: colors.paper },
  bgSelected: { backgroundColor: colors.selected },
  bgDisabled: { backgroundColor: colors.disabled },
  bgFocused: { backgroundColor: colors.focused },
  bgMuted: { backgroundColor: colors.muted },
  bgWhite: { backgroundColor: colors.white },
  bgGray100: { backgroundColor: colors.gray100 },
  bgGray200: { backgroundColor: colors.gray200 },
  bgGray300: { backgroundColor: colors.gray300 },
  bgGray400: { backgroundColor: colors.gray400 },
  bgGray500: { backgroundColor: colors.gray500 },
  bgGray600: { backgroundColor: colors.gray600 },
  bgGray700: { backgroundColor: colors.gray700 },
  bgGray800: { backgroundColor: colors.gray800 },
  bgGray900: { backgroundColor: colors.gray900 },
  bgBlack: { backgroundColor: colors.black },
  bgTransparent: { backgroundColor: colors.transparent }
}))

function createBackgroundColorStyles<T>(styles: CreateStylesFunc<T, Required<Pick<ViewStyle, 'backgroundColor'>>>) {
  return styles
}
