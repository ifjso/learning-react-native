import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

const HeadingText: React.FunctionComponent<{ style?: object }> = ({
  style,
  children
}) => <Text style={[style, fonts.big, scaled.big]}>{children}</Text>;

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  big: { fontSize: width / scalingFactors.big }
});

export default HeadingText;
