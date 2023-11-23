import { StyleSheet, View, Image } from 'react-native';
import { searchHour, searchWeather } from '../services/weatherHour';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import MainButton from '../components/MainButton';
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

export default function Search() {
    const navigation = useNavigation();
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (text) => {
        setCity(text);
    };
    
    useEffect(() => {
        if (loading) {
            fetchData();
        }
    }, [loading]);

    const fetchData = async () => {
        try {
            const [weatherData, hourData] = await Promise.all([
                searchWeather(city),
                searchHour(city),
            ]);

            setTimeout(() => {
                navigation.navigate("Weather", { weatherData, hourData });
            }, 4000);
            
        } catch(err) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            alert("Erro ao buscar cidade.")
        }
    };

    const handleFindPress = () => {
        setLoading(true);
    };

    return (
        <LinearGradient colors={[colors.linearPrimary[2], colors.linearPrimary[1], colors.linearPrimary[0]]} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            {loading ? (<Loading/>) : (
                <View style={styles.container}>
                    <View style={styles.utils}>
                        <SearchBar onSearch={handleSearch}/>
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
            )}
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
