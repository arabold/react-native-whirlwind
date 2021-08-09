import { StyleSheet } from 'react-native'

import background from './background'
import borders from './borders'
import effects from './effects'
import flexbox from './flexbox'
import layouts from './layouts'
import sizing from './sizing'
import spacing from './spacing'
import typography from './typography'

export default StyleSheet.create({
  ...background,
  ...borders,
  ...effects,
  ...flexbox,
  ...layouts,
  ...sizing,
  ...spacing,
  ...typography
})
