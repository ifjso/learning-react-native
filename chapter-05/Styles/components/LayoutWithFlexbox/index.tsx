import React from 'react';
import { View, Text } from 'react-native';

import Styles from './styles';

const LayoutWithFlexbox = () => (
    <View style={Styles.parent}>
        <Text style={Styles.child}> Child One </Text>
        <Text style={Styles.child}> Child Two </Text>
        <Text style={Styles.child}> Child Three </Text>
    </View>
);

export default LayoutWithFlexbox;
