import { TextStyle, ViewStyle } from 'react-native'
import { ThemeProps, CreateStylesFunc } from '../theme'

export default (theme: ThemeProps) =>
  ({
    ...boxShadow(theme),
    ...textShadow(theme),
    ...opacity(theme)
  } as const)

const boxShadow = createBoxShadowStyles(theme => ({
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1.5
  },
  shadowMd: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3
  },
  shadowLg: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    elevation: 7.5
  },
  shadowXl: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 25,
    elevation: 12.5
  },
  shadow2xl: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 25 },
    shadowRadius: 50,
    elevation: 25
  },
  shadowInner: {
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2
  },
  shadowOutline: {
    shadowColor: 'rgba(66, 153, 225, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0
  },
  shadowNone: {
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0
  }
}))

const textShadow = createTextShadowStyles(
  theme =>
    ({
      textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3
      },
      textShadowMd: {
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 6
      },
      textShadowLg: {
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 10 },
        textShadowRadius: 15
      },
      textShadowXl: {
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 20 },
        textShadowRadius: 25
      },
      textShadow2xl: {
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 25 },
        textShadowRadius: 50
      },
      textShadowInner: {
        textShadowColor: 'rgba(0, 0, 0, 0.06)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
      },
      textShadowOutline: {
        textShadowColor: 'rgba(0, 0, 0, 1.0)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3
      },
      textShadowNone: {
        textShadowColor: 'rgba(0, 0, 0, 0)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0
      }
    } as const)
)

const opacity = createOpacityStyles(theme => ({
  opacity100: { opacity: 1 },
  opacity90: { opacity: 0.9 },
  opacity80: { opacity: 0.8 },
  opacity75: { opacity: 0.75 },
  opacity70: { opacity: 0.7 },
  opacity60: { opacity: 0.6 },
  opacity50: { opacity: 0.5 },
  opacity40: { opacity: 0.4 },
  opacity30: { opacity: 0.3 },
  opacity25: { opacity: 0.25 },
  opacity20: { opacity: 0.2 },
  opacity10: { opacity: 0.1 },
  opacity0: { opacity: 0 }
}))

function createBoxShadowStyles<T>(
  styles: CreateStylesFunc<T, Required<Pick<ViewStyle, 'shadowColor' | 'shadowOffset' | 'shadowRadius' | 'elevation'>>>
) {
  return styles
}

function createTextShadowStyles<T>(
  styles: CreateStylesFunc<T, Required<Pick<TextStyle, 'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'>>>
) {
  return styles
}

function createOpacityStyles<T>(styles: CreateStylesFunc<T, Required<Pick<ViewStyle, 'opacity'>>>) {
  return styles
}
