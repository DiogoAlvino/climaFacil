import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';

const Loading = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject,styles.container]}>
            <LottieView source={require('../../assets/loading.json')} autoPlay loop/>
        </View>
    );
}

export default Loading;