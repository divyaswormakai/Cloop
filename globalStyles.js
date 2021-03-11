import { StyleSheet } from 'react-native';

import { GRAY_COLOR, INACTIVE_COLOR_BORDER, MAIN_COLOR, WHITE_COLOR } from './constant';
import { vw } from './viewport';

const globalStyles = StyleSheet.create({
  rowView: {
    minHeight: '15%',
    width: '100%',
    paddingHorizontal: 4 * vw,
    justifyContent: 'space-around',
  },
  rowTitle: {
    fontSize: 5 * vw,
  },
  pickerStyle: {
    backgroundColor: WHITE_COLOR,
    color: 'black',
  },
  pickerItemStyle: {
    borderWidth: 2,
    borderColor: MAIN_COLOR,
    borderStyle: 'solid',
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
  },
  pickerInactiveItemStyle: {
    borderWidth: 2,
    borderColor: INACTIVE_COLOR_BORDER,
    borderStyle: 'solid',
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
  },

  //   Vibrate
  rowContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContent: {
    paddingHorizontal: 8 * vw,
    paddingVertical: 3 * vw,
    backgroundColor: WHITE_COLOR,
    borderTopLeftRadius: 10,
    borderWidth: 2,
    borderColor: MAIN_COLOR,
    borderStyle: 'solid',
    borderRightWidth: 0,
    borderBottomLeftRadius: 10,
  },
  rightContent: {
    paddingHorizontal: 8 * vw,
    paddingVertical: 3 * vw,

    borderTopRightRadius: 10,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: MAIN_COLOR,
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderBottomRightRadius: 10,
  },
  activeInnerText: {
    color: WHITE_COLOR,
  },
  inactiveInnerText: {
    color: MAIN_COLOR,
  },

  //   TimeInterval
  col2: {
    width: '50%',
    flexDirection: 'row',
  },
  col4: {
    width: '50%',
    justifyContent: 'center',
    textAlignVertical: 'bottom',
    padding: 5,
    fontSize: 3.75 * vw,
  },
  inputField: {
    width: '50%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: MAIN_COLOR,
    fontSize: 5 * vw,
    backgroundColor: WHITE_COLOR,
  },
  inputFieldDisabled: {
    width: '50%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 5 * vw,
    borderColor: INACTIVE_COLOR_BORDER,
    backgroundColor: GRAY_COLOR,
  },

  // Buttons
  primaryButton: {
    backgroundColor: MAIN_COLOR,
    paddingVertical: 3 * vw,
    borderRadius: 10,
  },
  primaryButtonText: {
    textAlign: 'center',
    color: WHITE_COLOR,
    fontSize: 5 * vw,
  },
  secondaryButton: {
    backgroundColor: WHITE_COLOR,
    paddingVertical: 3 * vw,
    borderRadius: 10,
    borderColor: MAIN_COLOR,
    borderWidth: 2,
    marginTop: 20,
  },
  secondaryButtonText: {
    textAlign: 'center',
    color: MAIN_COLOR,
    fontSize: 5 * vw,
  },
});

export default globalStyles;
