import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryYellow,
    paddingHorizontal: 66,
    borderRadius: 50,
    height: 60,
    width: "60%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.primaryPurple,
    fontSize: 23,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});

export default styles;
