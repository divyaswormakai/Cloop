import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Buttons = ({ startStatus, setStartStatus }) => {
  return (
    <View>
      <Text>Let there be buttons</Text>
      {startStatus ? (
        <>
          <TouchableOpacity onPress={() => setStartStatus(false)}>
            <Text>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStartStatus(false)}>
            <Text>Stop</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => setStartStatus(true)}>
            <Text>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reset</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Buttons;
