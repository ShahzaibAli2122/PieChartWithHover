import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import TabNavigator from './src/Navigation/TabNavigator';

import Charts from './src/SchoolInnerPieChart'
import { Text, View } from 'react-native';
function App(): JSX.Element {
  return (
    <View>
      <Charts />
      <Text>Hello</Text>
    </View>
  );
}

export default App;
