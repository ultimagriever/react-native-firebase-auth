import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from '../../components';
import LoginForm from '../LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQJorAOVgpsncHTVNffjWxI_Fmvd0Lu7M',
      authDomain: 'react-native-auth-a21ef.firebaseapp.com',
      databaseURL: 'https://react-native-auth-a21ef.firebaseio.com',
      storageBucket: 'react-native-auth-a21ef.appspot.com',
      messagingSenderId: '70419168597'
    });
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
    );
  }
}
