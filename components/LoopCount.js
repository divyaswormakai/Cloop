import React from 'react';
import { Text, TextInput, View } from 'react-native';

import globalStyles from '../globalStyles';

const LoopCount = ({ loopCount, setLoopCount, startStatus }) => {
  return (
    <View style={globalStyles.rowView}>
      <Text style={globalStyles.rowTitle}>Number of Loops</Text>
      <View style={globalStyles.rowContent}>
        <View style={globalStyles.col2}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(value) => setLoopCount(value)}
            value={loopCount?.toString()}
            editable={!startStatus}
            style={
              !startStatus
                ? globalStyles.inputField
                : globalStyles.inputFieldDisabled
            }
          />
          <Text style={globalStyles.col4}>times</Text>
        </View>
      </View>
    </View>
  );
};

export default LoopCount;
