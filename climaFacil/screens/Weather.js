import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { searchHour, searchWeather } from '../services/weatherHour';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import LocationInfo from '../components/LocationInfo';
import Temperature from '../components/Temperature';
import WeatherInfo from '../components/WeatherInfo';
import MainButton from '../components/MainButton';
import { LinearGradient } from "expo-linear-gradient";

export default function Weather() {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('teste');
    };

    const handleBackPress = () => {
        navigation.navigate("Welcome");
    };

    return (
        <LinearGradient colors={[colors.linearPrimary[0], colors.linearPrimary[1], colors.linearPrimary[2]]} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.container}>
                <LocationInfo city="Brasilia" dayWeek="Sábado" date="18" month="11" hour="04:15"/>
                <Temperature temp="32"/>
                <WeatherInfo humidity="15" rain="30" thermal="35"/>
                <MainButton title="VOLTAR" onPress={handleBackPress}/>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
});
