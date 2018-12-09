import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';

export default class Newsflash extends Component {
  componentDidMount() {
    Alert.alert('Hey!', `You're on ${Platform.OS}.`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What? I didn't say anything.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
