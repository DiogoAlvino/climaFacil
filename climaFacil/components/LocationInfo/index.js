import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';

const LocationInfo = ({city, dayWeek, date, month, hour}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cityInfo}>
                <Ionicons style={styles.icon} name="location" size={30} />
                <Text style={styles.text}>{city}</Text>
            </View>
            <View style={styles.dataInfo}>
                <Text style={styles.subText}>{dayWeek}</Text>
                <Text style={styles.subText}>{date}</Text>
                <Text style={styles.subText}>{month}</Text>
                <Text style={styles.subText}>{hour}</Text>
            </View>
        </View>
    );
}

export default LocationInfo;