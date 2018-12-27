import React, { FC } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

type Props = {
  style?: object;
};

const NormalText: FC<Props> = ({ style, children }) => (
  <Text style={[style, fonts.normal, scaled.normal]}>{children}</Text>
);

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  normal: { fontSize: (width * 1.0) / scalingFactors.normal }
});

export default NormalText;
