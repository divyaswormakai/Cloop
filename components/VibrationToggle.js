import React from 'react';
import { Button, Text, View } from 'react-native';

const VibrationToggle = ({ setUserSettings, userSettings, startStatus }) => {
  return (
    <View>
      <Text>This is for Vibration toggle</Text>
      <Text>
        Vibrate:
        {/* <TouchableOpacity
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'ON' })}
          disabled={startStatus}>
          <Text>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'OFF' })}
          disabled={startStatus}>
          <Text>OFF</Text>
        </TouchableOpacity> */}
        <Button
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'ON' })}
          disabled={startStatus}
          title="ON"
        />
        <Button
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'OFF' })}
          disabled={startStatus}
          title="OFF"
        />
      </Text>
    </View>
  );
};

export default VibrationToggle;
