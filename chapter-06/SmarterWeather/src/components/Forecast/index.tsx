import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Forecast = ({ temp, main }) => (
    <View style={styles.forecast}>
        <Text style={{ color: '#FFFFFF', fontSize: 72 }}>
            {temp}°F
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 32 }}>
            {main}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    forecast: {
        alignItems: 'center',
    },
});

export default Forecast;
