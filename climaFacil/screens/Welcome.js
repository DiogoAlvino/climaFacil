import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainButton from '../components/MainButton';
import { searchHour, searchWeather } from '../services/weatherHour';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    const handleStartPress = () => {
        navigation.navigate('Search');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/logo.png')}
                resizeMode="contain"
            />
            <View style={styles.buttonContainer}>  
                <MainButton title="INICIAR" onPress={handleStartPress} />
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
        gap: 40
    },
    buttonContainer: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
});
