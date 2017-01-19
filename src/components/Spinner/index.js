import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Spinner = props => (
    <View style={styles.container}>
      <ActivityIndicator {...props} />
    </View>
);

Spinner.defaultProps = {
  color: 'white',
  size: 'large'
};

export default Spinner;
