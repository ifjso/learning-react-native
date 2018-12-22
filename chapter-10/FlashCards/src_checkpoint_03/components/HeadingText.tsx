import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

const HeadingText = ({
  style,
  children
}: {
  style?: object;
  children?: React.ReactNode;
}) => <Text style={[style, fonts.big, scaled.big]}>{children}</Text>;

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  big: { fontSize: width / scalingFactors.big }
});

export default HeadingText;
