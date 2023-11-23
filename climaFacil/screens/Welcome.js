import { StyleSheet, View, Image } from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
    const navigation = useNavigation();

    const handleStartPress = () => {
        navigation.navigate('Search');
    };

    return (
        <LinearGradient colors={[colors.linearPrimary[2], colors.linearPrimary[1], colors.linearPrimary[0]]} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
            <View style={styles.container}>
                <Image
                    style={styles.imageMain}
                    source={require('../assets/adaptive-icon.png')}
                    resizeMode="contain"
                />
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <View style={styles.buttonContainer}>  
                    <MainButton title="INICIAR" onPress={handleStartPress} />
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
        gap: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    imageMain: {
        width: 300,
        height: 300,
    },
    image: {
        width: 200,
        height: 200,
    },
});
