import React, { FC } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { fonts, scalingFactors } from '../styles/fonts';

type Props = {
  style?: object;
};

const HeadingText: FC<Props> = ({ style, children }) => (
  <Text style={[style, fonts.big, scaled.big]}>{children}</Text>
);

HeadingText.displayName = 'HeadingText';

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  big: { fontSize: width / scalingFactors.big }
});

export default HeadingText;
