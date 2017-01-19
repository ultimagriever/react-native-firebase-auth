import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, FormField } from '../../components';
import styles from './styles';

export default class LoginForm extends Component {
  constructor() {
    super();

    this.handlePress = this.handlePress.bind(this);
  }

  state = {
    email: '',
    password: '',
    errorMessage: ''
  }

  handlePress({ email, password }) {
    const { alert } = Alert;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          // User has logged in, welcome them to your app

          this.setState({ errorMessage: '' });
          // eslint-disable-next-line
          alert('Welcome!', 'Thank you for signing in, ' + user.email);
        })
        .catch(() => {
          // User probably doesn't exist, attempt to sign them up
          // If you don't want to sign people up indiscriminately, then you should
          // add some logic here to tell the user they weren't able to log in and why.

          /* eslint-disable */
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(user => alert('Thank you for signing up.'))
              .catch(error => {
                alert('An error has occurred, please try again.');

                /*
                If you would like, you can add some logic here to tell the user
                what kind of error that was, according to the error codes provided
                at the Firebase Auth documentation
                (https://firebase.google.com/docs/reference/js/firebase.auth.Error),
                like in the example below.

                You can also add some measure to prevent the user to attempt to log in
                all the time and straining your Firebase account by adding an incremental
                timer every few attempts, during which the user cannot perform any more attempts.
                */

                let errorMessage;
                switch (error.code) {
                  case 'auth/app-deleted':
                    errorMessage = 'The authentication server seems to have been deleted.';
                    break;
                  case 'auth/app-not-authorized':
                    errorMessage = 'There\'s an issue with the authentication server domain.';
                    break;
                  case 'auth/argument-error':
                    errorMessage = 'There is a bug with this app, please report it to the developer.';
                    break;
                  case 'auth/invalid-api-key':
                    errorMessage = 'The authentications server didn\'t recognize the API key.';
                    break;
                  case 'auth/network-request-failed':
                    errorMessage = 'Couldn\'t connect to the authentication server, please check if your device is connected to the Internet.';
                    break;
                  case 'auth/operation-not-allowed':
                    errorMessage = 'The authentication server administrator has not enabled this feature.';
                    break;
                  case 'auth/too-many-requests':
                    errorMessage = 'You have tried too many times, please wait before trying again.';
                    break;
                  case 'auth/user-disabled':
                    errorMessage = 'This user has been disabled from the system. Please contact an administrator.';
                    break;
                  default:
                    errorMessage = 'There has been an unknown error, please report to the developer.';
                }

                this.setState({ errorMessage });
              });
          /* eslint-enable */
        });
  }

  render() {
    return (
        <Card>
          <CardSection>
            <FormField
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="e.g. example@example.com"
                autoCapitalize="none"
                label="E-mail"
            />
          </CardSection>

          <CardSection>
            <FormField
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                label="Password"
                secureTextEntry
            />
          </CardSection>

          {
              this.state.errorMessage ? (
                  <Text style={styles.error}>
                    {this.state.errorMessage}
                  </Text>
              ) : null
          }

          <CardSection>
            <Button onPress={() => this.handlePress({ ...this.state })}>
              Log in
            </Button>
          </CardSection>
        </Card>
    );
  }
}
