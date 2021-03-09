import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import globalStyles from '../globalStyles';

const Buttons = ({ startStatus, setStartStatus }) => {
  return (
    <View style={globalStyles.rowView}>
      {startStatus ? (
        <>
          <TouchableOpacity
            onPress={() => setStartStatus(false)}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.primaryButtonText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStartStatus(false)}
            style={globalStyles.secondaryButton}>
            <Text style={globalStyles.secondaryButtonText}>Stop</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setStartStatus(true)}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.primaryButtonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStartStatus(true)}
            style={globalStyles.secondaryButton}>
            <Text style={globalStyles.secondaryButtonText}>Reset</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Buttons;
