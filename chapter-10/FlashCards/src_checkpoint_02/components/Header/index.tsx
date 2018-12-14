import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import HeadingText from '../HeadingText';
import Logo from './Logo';

const Header = () => (
  <View style={styles.header}>
    <Logo />
    <HeadingText>FLASHCARDS</HeadingText>
  </View>
);

export default Header;
