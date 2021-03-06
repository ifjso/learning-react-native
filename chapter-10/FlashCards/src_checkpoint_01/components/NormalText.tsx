import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

const NormalText = ({
  style,
  children
}: {
  style?: object;
  children: React.ReactNode;
}) => <Text style={[style, fonts.normal, scaled.normal]}>{children}</Text>;

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  normal: { fontSize: (width * 1.0) / scalingFactors.normal }
});

export default NormalText;
