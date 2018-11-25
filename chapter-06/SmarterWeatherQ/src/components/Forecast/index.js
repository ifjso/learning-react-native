import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    temp: number,
    main: string
}

const Forecast = (props: Props) =>
    <View style={styles.forecast}>
        <Text style={{ color: '#FFFFFF', fontSize: 72 }}>
            {props.temp}°F
        </Text>
        <Text stlye={{ color: '#FFFFFF', fontSize: 32 }}>
        </Text>
    </View>;

const styles = StyleSheet.create({
    forecast: { alignItems: 'center' }
});

export default Forecast;
