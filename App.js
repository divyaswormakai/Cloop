import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Buttons from './components/Buttons';
import LoopCount from './components/LoopCount';
import SelectSound from './components/SelectSound';
import TimeInterval from './components/TimeInterval';
import VibrationToggle from './components/VibrationToggle';

const App = () => {
  const [userSettings, setUserSettings] = useState({
    soundFile: '',
    vibrate: 'ON',
  });
  const [time, setTime] = useState({ min: '', sec: '' });
  const [loopCount, setLoopCount] = useState(0);
  const [startStatus, setStartStatus] = useState(false);

  useEffect(() => {
    console.log('GEt data from async storage if presnet');
  }, []);

  return (
    <View style={styles.container}>
      <SelectSound
        setUserSettings={setUserSettings}
        userSettings={userSettings}
        startStatus={startStatus}
      />
      <VibrationToggle
        setUserSettings={setUserSettings}
        userSettings={userSettings}
        startStatus={startStatus}
      />
      <TimeInterval time={time} setTime={setTime} startStatus={startStatus} />
      <LoopCount
        loopCount={loopCount}
        setLoopCount={setLoopCount}
        startStatus={startStatus}
      />
      <Buttons startStatus={startStatus} setStartStatus={setStartStatus} />
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
