import React from 'react';
import { View, Text, Alert } from 'react-native';
import firebase from 'firebase';
import styles from './styles';
import { Button, Card, CardSection } from '../';

const Welcome = props => (
  <View style={styles.container}>
    <Card>
      <CardSection>
        <Text>Welcome, {props.user.email}!</Text>
      </CardSection>
      <CardSection>
        <Button
            onPress={() =>
                firebase.auth().signOut().then(() => Alert.alert('Logged out successfully.'))}
        >
          Log out
        </Button>
      </CardSection>
    </Card>
  </View>
);

export default Welcome;
