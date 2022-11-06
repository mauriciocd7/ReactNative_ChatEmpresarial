import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import firebase from './src/FirebaseConnection'; 


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});



export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bem vindo Inicio do App.
        </Text>
      </View>
    );
  }
}