import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TimeInterval = ({ time, setTime, startStatus }) => {
  return (
    <View>
      <Text>Time Interval</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => setTime({ ...time, min: value.toString() })}
        placeholder="Min"
        value={time?.min}
        editable={!startStatus}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => setTime({ ...time, sec: value.toString() })}
        placeholder="Sec"
        value={time?.sec}
        editable={!startStatus}
      />
    </View>
  );
};

export default TimeInterval;
