import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import dummy from '../../components';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Hey I guess that this works!</Text>
        </View>
    );
  }
}
