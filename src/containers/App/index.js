import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Welcome, Spinner } from '../../components';
import LoginForm from '../LoginForm';
import styles from './styles';

export default class App extends Component {

  state = {
    authenticated: null,
    user: {}
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQJorAOVgpsncHTVNffjWxI_Fmvd0Lu7M',
      authDomain: 'react-native-auth-a21ef.firebaseapp.com',
      databaseURL: 'https://react-native-auth-a21ef.firebaseio.com',
      storageBucket: 'react-native-auth-a21ef.appspot.com',
      messagingSenderId: '70419168597'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user
        });
      } else {
        this.setState({
          authenticated: false,
          user: {}
        });
      }
    });
  }

  renderContent() {
    switch (this.state.authenticated) {
      case true:
        return <Welcome user={this.state.user} />;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.loading}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    console.log(this.state.user);
    return (
        <View style={{ flex: 1 }}>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
    );
  }
}
