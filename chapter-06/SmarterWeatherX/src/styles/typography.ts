import { StyleSheet, RegisteredStyle } from 'react-native';

export const baseFontSize = 24;

type FontStyle = {
    bigText: RegisteredStyle<{}>,
    mainText: RegisteredStyle<{}>,
    baseFontSize: number
};

const styles: FontStyle = {
    ...StyleSheet.create({
        bigText: {
            fontSize: baseFontSize + 8,
            color: '#FFFFFF'
        },
        mainText: {
            fontSize: baseFontSize,
            color: '#FFFFFF'
        }
    }),
    baseFontSize: 24
};

export default styles;
