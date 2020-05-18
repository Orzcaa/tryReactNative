import React, { Component } from 'react';
//import { firstComponent } from './firstComponent';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenue !</Text>
        <Image
          style={{ width: 250, height: 160 }}
          source={require('./assets/celebration.png')}
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View >
      <View style={styles.div}><Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View >
      <Button title="En savoir plus" style={styles.button} onPress={() => navigation.navigate({ firstComponent })}><Text style={styles.buttonText}>En savoir plus</Text></Button>
    </View >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#5e6285',
    textAlign: 'center',
    padding: '10%'
  },
  paragraph: {
    fontSize: 11,
    textAlign: 'center',
    padding: '4%',
    color: '#5b5f63',
  },
  div: {
    position: 'relative',
    backgroundColor: '#d3d5e8',
    color: '#5e6285',
    width: '90%',
    height: '20%',
    margin: '5%',
    padding: '2%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#d3d5e8',
    borderRadius: 20,
    height: '6%',
    width: '30%',
  },
  buttonText: {
    position: 'relative',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  }
});
