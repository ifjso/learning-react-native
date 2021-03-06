import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { random } from 'lodash';
import Video from 'react-native-video';
import HelloWorld from './src/HelloWorld';

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log(`Your lucky number is ${random(0, 100)}`);

    HelloWorld.greeting('Bonnie');

    return (
      <View style={styles.container}>
        <Video
          source={require('./warbler.mp4')}
          rate={1.0}
          volume={1.0}
          muted={false}
          paused={false}
          resizeMode="cover"
          repeat={true}
          style={styles.backgroundVideo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
