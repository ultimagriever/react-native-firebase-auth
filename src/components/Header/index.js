// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Make a component
const Header = (props) => (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
);

// Make the component available
export default Header;
