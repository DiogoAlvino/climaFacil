import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { searchHour, searchWeather } from '../services/weatherHour';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import MainButton from '../components/MainButton';

export default function Search() {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('o que está sendo digitado >> ', text);
    };

    const handleFindPress = () => {
        navigation.navigate("Weather");
    };

    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.linearPrimary[0],
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
