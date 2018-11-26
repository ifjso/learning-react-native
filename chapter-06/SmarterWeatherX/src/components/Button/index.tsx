import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './style';

type Props = {
    label: string,
    style?: object,
    onPress: () => void
};

const Button = (props: Props) => (
    <TouchableHighlight onPress={props.onPress}>
        <View style={[styles.button, props.style]}>
            <Text>
                {props.label}
            </Text>
        </View>
    </TouchableHighlight>);

export default Button;
