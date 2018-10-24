import React from 'react';
import { Text } from 'react-native';

const InlineStyle = () => (
    <Text>
        The quick <Text style={{ fontStyle: "italic" }}>brown</Text> fox
        jumped over the lazy <Text style={{ fontWeight: "bold" }}>dog</Text>.
    </Text>
);

export default InlineStyle;
