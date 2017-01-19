import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const FormField = props => (
      <View style={styles.container}>
        <Text style={styles.label}>
          {props.label}
        </Text>
        <TextInput
            style={styles.input}
            autoCorrect={false}
            {...props}
        />
      </View>
);

export default FormField;
