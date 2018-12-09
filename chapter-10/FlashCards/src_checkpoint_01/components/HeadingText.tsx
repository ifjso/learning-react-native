import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

const { width } = Dimensions.get('window');

type Props = {
  style: object;
  children: React.ReactNode;
};

const HeadingText = (props: Props) => (
  <Text style={[props.style, fonts.big, scaled.big]}>{props.children}</Text>
);

const scaled = StyleSheet.create({
  big: { fontSize: width / scalingFactors.big }
});

export default HeadingText;
