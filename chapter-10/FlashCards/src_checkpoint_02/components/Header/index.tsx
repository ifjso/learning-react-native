import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import HeadingText from '../HeadingText';

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../../../icon.png')} style={styles.logo} />
    <HeadingText>FLASHCARDS</HeadingText>
  </View>
);

export default Header;
