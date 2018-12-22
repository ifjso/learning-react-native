import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

const Button = ({
  disabled = false,
  children,
  style,
  onPress
}: {
  disabled: false;
  children?: React.ReactNode;
  style?: object;
  onPress: () => void;
}) => {
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
