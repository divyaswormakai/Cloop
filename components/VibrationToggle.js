import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const VibrationToggle = ({ setUserSettings, userSettings, startStatus }) => {
  return (
    <View>
      <Text>This is for Vibration toggle</Text>
      <Text>
        Vibrate:
        <TouchableOpacity
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'ON' })}
          disabled={startStatus}>
          <Text>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'OFF' })}
          disabled={startStatus}>
          <Text>OFF</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default VibrationToggle;
