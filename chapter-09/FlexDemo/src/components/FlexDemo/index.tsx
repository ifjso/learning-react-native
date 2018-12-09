import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const FlexDemo = () => (
  <View style={styles.parent}>
    <Text style={styles.child}> Child One </Text>
    <Text style={styles.child}> Child Two </Text>
    <Text style={styles.child}> Child Three </Text>
  </View>
);

export default FlexDemo;
