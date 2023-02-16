import {StyleSheet} from 'react-native';
import {GREY_COLOR} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: GREY_COLOR,
  },
  label: {
    width: 100,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 18,
    borderWidth: 0.5,
    borderColor: GREY_COLOR,
    borderRadius: 12,
  },
});

export default styles;
