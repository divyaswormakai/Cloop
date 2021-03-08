import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TimeInterval = ({ time, setTime, startStatus, timeToShow }) => {
  return (
    <View>
      <Text>Time Interval</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => setTime({ ...time, min: value })}
        placeholder="Min"
        value={
          !startStatus ? time?.min?.toString() : timeToShow?.min?.toString()
        }
        editable={!startStatus}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => setTime({ ...time, sec: value })}
        placeholder="Sec"
        value={
          !startStatus ? time?.sec?.toString() : timeToShow?.sec?.toString()
        }
        editable={!startStatus}
      />
    </View>
  );
};

export default TimeInterval;
