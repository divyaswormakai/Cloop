import React from 'react';
import { StyleSheet, View } from 'react-native';

import Buttons from './components/Buttons';
import LoopCount from './components/LoopCount';
import SelectSound from './components/SelectSound';
import TimeInterval from './components/TimeInterval';
import VibrationToggle from './components/VibrationToggle';

const App = () => {
  return (
    <View style={styles.container}>
      <SelectSound />
      <VibrationToggle />
      <TimeInterval />
      <LoopCount />
      <Buttons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default App;
