import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';

import globalStyles from '../globalStyles';

const soundNames = ['beep_1.wav', 'beep_2.wav'];

const SelectSound = ({ userSettings, setUserSettings, startStatus }) => {
  return (
    <View style={globalStyles.rowView}>
      <Text style={globalStyles.rowTitle}>Select the alert audio</Text>
      <View style={globalStyles.pickerItemStyle}>
        <Picker
          selectedValue={userSettings.soundFile}
          onValueChange={(itemVal, itemInd) =>
            setUserSettings({ ...userSettings, soundFile: itemVal })
          }
          enabled={!startStatus}
          style={globalStyles.pickerStyle}>
          {soundNames.map((name) => (
            <Picker.Item label={name} value={name} key={`Sound-${name}`} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectSound;
