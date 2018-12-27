import React, { FC } from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Logo: FC = () => (
  <Image source={require('../../../icon.png')} style={styles.logo} />
);

Logo.displayName = 'Logo';

export default Logo;
