import { StyleSheet, View} from 'react-native';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import LocationInfo from '../components/LocationInfo';
import Temperature from '../components/Temperature';
import WeatherInfo from '../components/WeatherInfo';
import MainButton from '../components/MainButton';
import { LinearGradient } from "expo-linear-gradient";
import weekDaysBR from '../constants/weekDaysBR';
import { convertDateISOtoBR, formatHours } from '../utils/libFunctions';

export default function Weather({route}) {
    const { weatherData, hourData } = route.params;
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate("Welcome");
    };

    return (
        <LinearGradient colors={[colors.linearPrimary[2], colors.linearPrimary[1], colors.linearPrimary[0]]} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.container}>
                <LocationInfo city={weatherData.name} dayWeek={weekDaysBR[hourData.day_of_week]} date={convertDateISOtoBR(hourData.date)} hour={formatHours(hourData.datetime)}/>
                <Temperature temp={Math.round(weatherData.main.temp)}/>
                <WeatherInfo humidity={weatherData.main.humidity} wind={weatherData.wind.speed} thermal={weatherData.main.feels_like}/>
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
