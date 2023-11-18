import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Temperature = ({temperature}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{temperature}°</Text>
        </View>
    );
}

export default Temperature;