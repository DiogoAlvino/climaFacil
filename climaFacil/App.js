import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './components/MainButton';
import searchWeather from './services/weather';

export default function App() {
  return (
    <View style={styles.container}>
      <MainButton title="INICIAR" onPress={() => searchWeather('Maraba')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
