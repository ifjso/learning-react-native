import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

const NormalText: React.FunctionComponent<{ style?: object }> = ({
  style,
  children
}) => <Text style={[style, fonts.normal, scaled.normal]}>{children}</Text>;

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  normal: { fontSize: width / scalingFactors.normal }
});

export default NormalText;
