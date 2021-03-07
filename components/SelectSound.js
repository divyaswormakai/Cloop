import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';

const soundNames = ['beep_1.wav', 'beep_2.wav'];

const SelectSound = ({ userSettings, setUserSettings, startStatus }) => {
  return (
    <View>
      <Text>Select the alert audio</Text>
      <Picker
        selectedValue={userSettings.soundFile}
        onValueChange={(itemVal, itemInd) =>
          setUserSettings({ ...userSettings, soundFile: itemVal })
        }
        enabled={!startStatus}>
        {soundNames.map((name) => (
          <Picker.Item label={name} value={name} key={`Sound-${name}`} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectSound;
