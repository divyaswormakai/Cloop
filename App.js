import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import Sound from 'react-native-sound';

import Buttons from './components/Buttons';
import LoopCount from './components/LoopCount';
import SelectSound from './components/SelectSound';
import TimeInterval from './components/TimeInterval';
import VibrationToggle from './components/VibrationToggle';
import { BACKGROUND_COLOR, MAIN_COLOR, WHITE_COLOR } from './constant';
import { vw } from './viewport';

const App = () => {
  const [userSettings, setUserSettings] = useState({
    soundFile: 'beep_2.wav',
    vibrate: 'ON',
  });
  const [time, setTime] = useState({ min: null, sec: null });
  const [timeToShow, setTimeToShow] = useState({ min: null, sec: null });
  const [loopCount, setLoopCount] = useState(null);
  const [originalLoopCount, setOriginalLoopCount] = useState(0);
  const [startStatus, setStartStatus] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // GET DATA FROM ASYNC STORAGE
    Sound.setCategory('Playback');
  }, []);

  useEffect(() => {
    if (startStatus && loopCount - 1 >= 0) {
      setTimeout(() => {
        let seconds = parseInt(timeToShow.sec, 10);
        let minutes = parseInt(timeToShow.min, 10);
        seconds -= 10;
        if (seconds < 0) {
          seconds = 20; //59
          minutes -= 1;
          if (minutes < 0) {
            minutes = parseInt(time.min, 10);
            PlaySoundVibrate();
            console.log('Loop', loopCount, minutes, seconds);
            if (parseInt(loopCount, 10) <= 1) {
              seconds = parseInt(time.sec, 10);
              setLoopCount(originalLoopCount);
              setStartStatus(false);
            } else {
              setLoopCount(loopCount - 1);
            }
          }
        }
        setTimeToShow({ sec: seconds, min: minutes });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startStatus, timeToShow]);

  useEffect(() => {
    setOriginalLoopCount(loopCount);
    setTimeToShow({ ...time });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startStatus]);

  const PlaySoundVibrate = () => {
    const whoosh = new Sound(
      userSettings.soundFile,
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('Error:', error);
          return;
        }
        whoosh.play();
        if (userSettings.vibrate === 'ON') {
          Vibration.vibrate(100);
        }
      },
    );
  };

  const stopBtnPress = () => {
    setStartStatus(false);
  };

  const resetBtnPress = () => {
    setLoopCount(null);
    setTime({ min: null, sec: null });
    setTimeToShow({ min: null, sec: null });
    setOriginalLoopCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CLoop</Text>
      </View>
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
        isPaused={isPaused}
      />
      <LoopCount
        loopCount={loopCount}
        setLoopCount={setLoopCount}
        startStatus={startStatus}
        originalLoopCount={originalLoopCount}
        isPaused={isPaused}
      />
      <Buttons
        startStatus={startStatus}
        setStartStatus={setStartStatus}
        stopBtnPress={stopBtnPress}
        resetBtnPress={resetBtnPress}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    height: '8%',
    width: '100%',
    backgroundColor: WHITE_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: MAIN_COLOR,
    fontSize: 6 * vw,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    paddingHorizontal: 3 * vw,
  },
});

export default App;
