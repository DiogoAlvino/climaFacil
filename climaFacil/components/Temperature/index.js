import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Temperature = ({temp}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{temp}°</Text>
        </View>
    );
}

export default Temperature;