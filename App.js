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
  const [time, setTime] = useState({ min: null, sec: null });
  const [timeToShow, setTimeToShow] = useState({ min: null, sec: null });
  const [loopCount, setLoopCount] = useState(null);
  const [originalLoopCount, setOriginalLoopCount] = useState(0);
  const [startStatus, setStartStatus] = useState(false);

  useEffect(() => {
    console.log('GEt data from async storage if presnet');
  }, []);

  useEffect(() => {
    if (startStatus && loopCount >= 0) {
      setTimeout(() => {
        let seconds = parseInt(timeToShow.sec, 10);
        let minutes = parseInt(timeToShow.min, 10);
        seconds -= 10;
        if (seconds < 0) {
          seconds = 20;
          minutes -= 1;
          if (minutes < 0) {
            console.log(minutes, seconds, loopCount);
            minutes = parseInt(time.min, 10);

            if (parseInt(loopCount, 10) <= 0) {
              console.log('FINISHED');
              setStartStatus(false);
              seconds = parseInt(time.sec, 10);
              setLoopCount(originalLoopCount);
            } else {
              setLoopCount(loopCount - 1);
            }
          }
        }
        setTimeToShow({ sec: seconds, min: minutes });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startStatus, timeToShow, time]);

  useEffect(() => {
    setOriginalLoopCount(loopCount);
    setTimeToShow({ ...time });
  }, [loopCount, time]);

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
      <TimeInterval
        time={time}
        setTime={setTime}
        startStatus={startStatus}
        timeToShow={timeToShow}
      />
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
