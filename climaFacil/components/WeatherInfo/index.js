import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const WeatherInfo = ({humidity, rain, thermal}) => {
    return (
        <View style={[styles.container, styles.shadowProps]}>
            <View style={styles.info}>
                <Ionicons style={styles.icon} name="umbrella-outline" size={30} />
                <Text style={styles.text}>{humidity}%</Text>
                <Text style={styles.text}>Umidade</Text>
            </View>
            <View style={styles.info}>
                <Ionicons style={styles.icon} name="rainy-outline" size={30} />
                <Text style={styles.text}>{rain}%</Text>
                <Text style={styles.text}>Chuva</Text>
            </View>
            <View style={styles.info}>
                <Ionicons style={styles.icon} name="thermometer-outline" size={30} />
                <Text style={styles.text}>{thermal}°</Text>
                <Text style={styles.text}>Sensação</Text>
            </View>
        </View>
    );
}

export default WeatherInfo;