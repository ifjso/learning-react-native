import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

type Props = {
  style?: object;
  children: React.ReactNode;
};

const HeadingText = (props: Props) => (
  <Text style={[props.style, fonts.big, scaled.big]}>{props.children}</Text>
);

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  big: { fontSize: width / scalingFactors.big }
});

export default HeadingText;
