import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryYellow,
    paddingHorizontal: 66,
    borderRadius: 50,
    height: 72,
    width: 298,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.primaryPurple,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default styles;
