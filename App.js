import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, Vibration, View } from 'react-native';
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
  const [time, setTime] = useState({ min: '', sec: '' });
  const [timeToShow, setTimeToShow] = useState({ min: '', sec: '' });
  const [loopCount, setLoopCount] = useState(null);
  const [originalLoopCount, setOriginalLoopCount] = useState(0);
  const [startStatus, setStartStatus] = useState(false);

  useEffect(() => {
    // GET DATA FROM ASYNC STORAGE
    Sound.setCategory('Playback');
  }, []);

  useEffect(() => {
    if (startStatus && loopCount - 1 >= 0) {
      setTimeout(() => {
        let seconds = parseInt(
          timeToShow.sec?.length <= 0 ? '0' : timeToShow.sec,
          10,
        );
        let minutes = parseInt(
          timeToShow.min?.length <= 0 ? '0' : timeToShow.min,
          10,
        );
        console.log('Showing seconds,minutes', seconds, minutes, timeToShow);
        seconds -= 10;

        if (seconds < 0) {
          seconds = 20; //59
          minutes -= 1;
          if (minutes < 0) {
            minutes = parseInt(time.min?.length <= 0 ? '0' : time.min, 10);
            PlaySoundVibrate();
            if (parseInt(loopCount, 10) <= 1) {
              seconds = parseInt(time.sec?.length <= 0 ? '0' : time.sec, 10);
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
  }, [timeToShow]);

  useEffect(() => {
    setOriginalLoopCount(loopCount);
    console.log(loopCount, typeof loopCount);
    const min = time.min?.length <= 0 ? '0' : time.min;
    const sec = time.sec?.length <= 0 ? '0' : time.sec;
    if (min <= '0' && sec <= '0' && startStatus) {
      ToastAndroid.show('Time is not set', ToastAndroid.SHORT);
      setStartStatus(false);
    } else {
      if (!loopCount || loopCount?.length <= 0 || loopCount === '0') {
        ToastAndroid.show('Please set number of loops', ToastAndroid.SHORT);
        setStartStatus(false);
      } else {
        setTimeToShow({
          min,
          sec,
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startStatus]);

  const PlaySoundVibrate = () => {
    console.log('Play sound');
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
      />
      <LoopCount
        loopCount={loopCount}
        setLoopCount={setLoopCount}
        startStatus={startStatus}
        originalLoopCount={originalLoopCount}
      />
      <Buttons
        startStatus={startStatus}
        setStartStatus={setStartStatus}
        stopBtnPress={stopBtnPress}
        resetBtnPress={resetBtnPress}
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
