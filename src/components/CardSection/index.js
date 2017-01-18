import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardSection = props => (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
);

CardSection.defaultProps = {
  style: {}
}

export default CardSection;
