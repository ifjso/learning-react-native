import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

const italic: StyleProp<TextStyle> = {
    fontStyle: "italic",
};

const bold: StyleProp<TextStyle> = {
    fontWeight: "bold",
};

export default () => (
    <Text>
        The quick <Text style={italic}>brown</Text> fox
        jumped over the lazy <Text style={bold}>dog</Text>.
    </Text>
);
