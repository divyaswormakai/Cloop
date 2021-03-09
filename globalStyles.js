import { StyleSheet } from 'react-native';

import { MAIN_COLOR, WHITE_COLOR } from './constant';
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
});

export default globalStyles;
