import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage,
    Image
} from 'react-native';
import Forecast from './src/components/Forecast';
import LocationButton from './src/components/LocationButton';
import textStyles, { baseFontSize } from './src/styles/typography';

import openWeatherMap from './lib/openWeatherMap';
// import PhotoBackdrop from './src/components/PhotoBackdrop';
import PhotoBackdrop from './src/components/PhotoBackdrop/localImage';

const STORAGE_KEY = '@smarterweather:zip';

type State = { forecast: any };

export default class App extends Component<{}, State> {
    state: State = { forecast: null };

    componentDidMount () {
        AsyncStorage
            .getItem(STORAGE_KEY)
            .then(value => value && this._getForecastForZip(value))
            .catch(error => console.error(`AsyncStorage error: ${error.message}`));
    }

    render () {
        let content;

        if (this.state.forecast !== null) {
            content = (
                <View style={styles.row}>
                    <Forecast {...this.state.forecast}/>
                </View>
            );
        }

        return (
            <PhotoBackdrop>
                <View style={styles.overlay}>
                    <View style={styles.row}>
                        <Text style={textStyles.mainText}>
                            Forecast for
                        </Text>

                        <View style={styles.zipContainer}>
                            <TextInput
                                style={[textStyles.mainText, styles.zipCode]}
                                onSubmitEditing={this._handleTextchange}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <LocationButton onGetCoords={this._getForecastForCoords} />
                    </View>

                    {content}
                </View>
            </PhotoBackdrop>
        );
    }

    _getForecastForZip = (zip: string): void => {
        AsyncStorage
            .setItem(STORAGE_KEY, zip)
            .then(() => console.log(`Saved selection to disk: ${zip}`))
            .catch(error => console.log(`AsyncStorage error: ${error.message}`));

        openWeatherMap
            .fetchZipForecast(zip)
            .then(forecast => this.setState({ forecast }));
    }

    _getForecastForCoords = (lat: number, lon: number) => {
        openWeatherMap
            .fetchLatLonForecast(lat, lon)
            .then(forecast => this.setState({ forecast }));
    }

    _handleTextchange = e => {
        const zip = e.nativeEvent.text;
        this._getForecastForZip(zip);
    }
}

const styles = StyleSheet.create({
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding:  24
    },
    zipContainer: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
        width: 80,
        height: baseFontSize * 2,
        justifyContent: 'flex-end'
    },
    zipCode: { flex: 1 }
});
