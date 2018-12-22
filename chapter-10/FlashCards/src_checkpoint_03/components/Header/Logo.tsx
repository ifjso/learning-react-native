import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Logo = () => (
  <Image source={require('../../../icon.png')} style={styles.logo} />
);

export default Logo;
