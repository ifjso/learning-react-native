import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
    temp: number,
    main: string,
    description: string,
    name: string
};

const Forecast = (props: Props) => (
    <View style={styles.forecast}>
        <Text style={{ color: '#FFFFFF', fontSize: 32 }}>
            {props.main}
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
            Current conditions: {props.description}
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
            Current location: {props.name}
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 72 }}>
            {props.temp}°F
        </Text>
    </View>
);

const styles = StyleSheet.create({
    forecast: {
        alignItems: 'center'
    }
});

export default Forecast;
