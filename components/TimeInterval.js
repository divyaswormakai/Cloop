import React from 'react';
import { Text, TextInput, View } from 'react-native';

import globalStyles from '../globalStyles';

const TimeInterval = ({ time, setTime, startStatus, timeToShow }) => {
  return (
    <View style={globalStyles.rowView}>
      <Text style={globalStyles.rowTitle}>Time Interval</Text>
      <View style={globalStyles.rowContent}>
        <View style={globalStyles.col2}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(value) => setTime({ ...time, min: value })}
            value={
              !startStatus ? time?.min?.toString() : timeToShow?.min?.toString()
            }
            editable={!startStatus}
            style={
              !startStatus
                ? globalStyles.inputField
                : globalStyles.inputFieldDisabled
            }
          />
          <Text style={globalStyles.col4}>minute(s)</Text>
        </View>
        <View style={globalStyles.col2}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(value) => setTime({ ...time, sec: value })}
            value={
              !startStatus ? time?.sec?.toString() : timeToShow?.sec?.toString()
            }
            editable={!startStatus}
            style={
              !startStatus
                ? globalStyles.inputField
                : globalStyles.inputFieldDisabled
            }
          />
          <Text style={globalStyles.col4}>second(s)</Text>
        </View>
      </View>
    </View>
  );
};

export default TimeInterval;
