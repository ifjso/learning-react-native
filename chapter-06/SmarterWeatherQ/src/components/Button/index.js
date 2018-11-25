import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './style';

type Props = {
    style: {
        backgroundColor: string,
        padding: number,
        borderRadius: number
    },
    label: string,
    onPress: () => void
};

const Button = (props: Props) =>
    <TouchableHighlight onPress={props.onPress}>
        <View style={[styles.button, props.style]}>
            <Text>
                {props.label}
            </Text>
        </View>
    </TouchableHighlight>;

export default Button;
