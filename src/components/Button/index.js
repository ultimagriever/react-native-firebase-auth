import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;
