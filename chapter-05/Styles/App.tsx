/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InlineStyle from './components/InlineStyle';
import ObjectStyle from './components/ObjectStyle';
import MergingStyle from './components/MergingStyle';

type Props = {};
export default class App extends Component<Props> {
    public render () {
        return (
            <View style={styles.container}>
                <InlineStyle />
                <ObjectStyle />
                <MergingStyle>MergingStyle</MergingStyle>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
