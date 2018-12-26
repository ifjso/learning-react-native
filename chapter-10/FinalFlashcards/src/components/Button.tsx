import React, { FC } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import colors from '../style/colors';

type Props = {
  style: object;
  onPress: () => void;
};

const Button: FC<Props> = ({}) => {};

const styles = StyleSheet.create({
  wideButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: colors.pink
  }
});

export default Button;
