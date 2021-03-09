import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { INACTIVE_COLOR, INACTIVE_COLOR_BORDER, MAIN_COLOR } from '../constant';
import globalStyles from '../globalStyles';

const VibrationToggle = ({ setUserSettings, userSettings, startStatus }) => {
  const getStyle = (part) => {
    let returnStyle = {};
    if (part === 'ON') {
      returnStyle = {
        ...globalStyles.leftContent,
      };
      if (userSettings.vibrate === 'ON') {
        returnStyle = {
          ...returnStyle,
          backgroundColor: MAIN_COLOR,
        };
      }
    } else {
      returnStyle = {
        ...globalStyles.rightContent,
      };
      if (userSettings.vibrate === 'OFF') {
        returnStyle = {
          ...returnStyle,
          backgroundColor: MAIN_COLOR,
        };
      }
    }

    if (startStatus) {
      if (part === userSettings.vibrate) {
        returnStyle = {
          ...returnStyle,
          backgroundColor: INACTIVE_COLOR,
        };
      }
      returnStyle = {
        ...returnStyle,
        borderColor: INACTIVE_COLOR_BORDER,
      };
    }
    return returnStyle;
  };

  const getTextStyle = (part) => {
    let returnStyle = {};
    if (part === userSettings.vibrate) {
      returnStyle = { ...globalStyles.activeInnerText };
    } else {
      returnStyle = { ...globalStyles.inactiveInnerText };
      if (startStatus) {
        returnStyle = { ...returnStyle, color: INACTIVE_COLOR };
      }
    }

    return returnStyle;
  };
  return (
    <View style={globalStyles.rowView}>
      <Text style={globalStyles.rowTitle}>Vibration</Text>
      <View style={globalStyles.rowContent}>
        <TouchableOpacity
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'ON' })}
          disabled={startStatus}
          style={getStyle('ON')}>
          <Text style={getTextStyle('ON')}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUserSettings({ ...userSettings, vibrate: 'OFF' })}
          disabled={startStatus}
          style={getStyle('OFF')}>
          <Text style={getTextStyle('OFF')}>OFF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VibrationToggle;
