import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

type Props = {
  disabled?: boolean;
  style: object;
  onPress: () => void;
};

const Button: FC<Props> = ({ disabled = false, onPress, style, children }) => {
  const opacity = disabled ? 1 : 0.5;

  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPress={onPress}
      style={[styles.wideButton, style]}
    >
      {children}
    </TouchableOpacity>
  );
};

Button.displayName = 'Button';

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
