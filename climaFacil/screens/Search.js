import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { searchHour, searchWeather } from '../services/weatherHour';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import MainButton from '../components/MainButton';
import { LinearGradient } from "expo-linear-gradient";

export default function Search() {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('o que está sendo digitado >> ', text);
    };

    const handleFindPress = () => {
        navigation.navigate("Weather");
    };

    return (
        <LinearGradient colors={[colors.linearPrimary[0], colors.linearPrimary[1], colors.linearPrimary[2]]} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <View style={styles.container}>
                <View style={styles.utils}>
                    <SearchBar onSearch={handleSearch} />
                    <MainButton title="BUSCAR" onPress={handleFindPress}/>
                </View>
                <View style={styles.logo}>
                    <Image
                        style={styles.image}
                        source={require('../assets/logo2.png')}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    utils: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap: 10,
    },
    logo: {
        position: 'absolute',
        bottom: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: 200,
        height: 200,
    },
});
