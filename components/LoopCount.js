import React from 'react';
import { Text, TextInput, View } from 'react-native';

const LoopCount = ({ loopCount, setLoopCount, startStatus }) => {
  return (
    <View>
      <Text>This is for loop cont</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => setLoopCount(value)}
        placeholder="No of loops"
        value={loopCount?.toString()}
        editable={!startStatus}
      />
    </View>
  );
};

export default LoopCount;
