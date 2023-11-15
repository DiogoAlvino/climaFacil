import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './style';

const MainButton = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default MainButton;
