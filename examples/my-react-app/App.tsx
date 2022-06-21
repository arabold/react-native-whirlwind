import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import t from './theme';

function Paper({ children }: React.PropsWithChildren<{}>) {
  return (
    <View style={[t.bgPaper, t.mT4, t.p4, t.rounded]}>
      {children}
    </View>
  )
}

export default function App() {
  return (
    <View style={[t.p4, t.justifyCenter, t.bgPrimary, t.flexShrink1]}>
      <Text style={[t.text2xl, t.textWhite, t.fontSansBold, t.textCenter]}>
        Welcome to Whirlwind
      </Text>
      <Paper>
        <Text style={[t.textBlack]}>
          Change code in the editor and watch it change on your phone!
        </Text>
      </Paper>
    </View>
  );
}
