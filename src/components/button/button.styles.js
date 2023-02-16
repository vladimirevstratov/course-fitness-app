import {StyleSheet} from 'react-native';
import {MEDIUM_STATE_BLUE_COLOR, WHITE_COLOR} from '../../constants/theme';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MEDIUM_STATE_BLUE_COLOR,
    borderRadius: 25,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: WHITE_COLOR,
  },
});

export default styles;
