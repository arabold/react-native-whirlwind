import { StyleSheet } from 'react-native'

export default {
  // Display
  flex: { display: 'flex' },
  hidden: { display: 'none' },
  // Object Fit
  objectContain: { resizeMode: 'contain' },
  objectCover: { resizeMode: 'cover' },
  objectStretch: { resizeMode: 'stretch' },
  objectCenter: { resizeMode: 'center' },
  objectRepeat: { resizeMode: 'repeat' },
  resizeContain: { resizeMode: 'contain' },
  resizeCover: { resizeMode: 'cover' },
  resizeStretch: { resizeMode: 'stretch' },
  resizeCenter: { resizeMode: 'center' },
  resizeRepeat: { resizeMode: 'repeat' },
  // Overflow
  overflowVisible: { overflow: 'visible' },
  overflowHidden: { overflow: 'hidden' },
  // Position
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  // Top / Right / Bottom / Left
  inset0: { top: 0, bottom: 0, left: 0, right: 0 },
  insetY0: { top: 0, bottom: 0 },
  insetX0: { left: 0, right: 0 },
  top0: { top: 0 },
  right0: { right: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  start0: { start: 0 },
  end0: { end: 0 },
  // Tint Color
  tintTransparent: { tintColor: 'transparent' },
  tintBlack: { tintColor: '#000' },
  tintWhite: { tintColor: '#fff' },
  // Z=Index
  // zAuto: { zIndex: "auto" },
  z0: { zIndex: 0 },
  z10: { zIndex: 10 },
  z20: { zIndex: 20 },
  z30: { zIndex: 30 },
  z40: { zIndex: 40 },
  z50: { zIndex: 50 }
} as StyleSheet.NamedStyles<any>
