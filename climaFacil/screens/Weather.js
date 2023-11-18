import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { searchHour, searchWeather } from '../services/weatherHour';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import LocationInfo from '../components/LocationInfo';
import Temperature from '../components/Temperature';
import WeatherInfo from '../components/WeatherInfo';

export default function Weather() {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('teste');
    };

    const handleFindPress = () => {
        navigation.navigate("Welcome");
    };

    return (
        <View style={styles.container}>
            <WeatherInfo/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.linearPrimary[0],
        alignItems: 'center',
        justifyContent: 'center',
    },
});
