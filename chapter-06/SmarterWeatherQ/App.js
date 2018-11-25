import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';
import Forecast from './src/components/Forecast';
import LocationButton from './src/components/LocationButton';
import textStyles from './src/styles/typography';
import PhotoBackdrop from './src/components/PhotoBackdrop/local-image';
// import PhotoBackdrop from './src/components/PhotoBackdrop';
import OpenWeatherMap from './lib/open-weather-map';

type Props = {};

type State = { forecast: { main: string, temp: number }};

const STORAGE_KEY = "@SmarterWeather:zip";

export default class App extends Component<Props, State> {
    state = { forecast: null };

    componentDidMount() {
        AsyncStorage
            .getItem(STORAGE_KEY)
            .then(value => {
                if (value !== null) {
                    this._getForecastForZip(value);
                }
            })
            .catch(error => console.error(`AsyncStorage error: ${error.message}`));
    }

    _getForecastForZip = (zip: string): void => {
        AsyncStorage
            .setItem(STORAGE_KEY, zip)
            .then(() => console.log(`Saved selection to disk: ${zip}`))
            .catch(error => console.error(`AsyncStorage error: ${error.message}`));

        OpenWeatherMap.fetchZipForecast(zip).then(forecast => this.setState({ forecast }));
    };

    _getForecastForCoords = (lat: number, lon: number): void =>
        OpenWeatherMap.fetchLatLonForecast(lat, lon).then(forecast => this.setState({ forecast }));


    _handleTextChange = (event: SyntheticEvent<HTMLButtonElement>): void => {
        let zip = event.nativeEvent.text;
        this._getForecastForZip(zip);
    }

    render() {
        let content;
        if (this.state.forecast !== null) {
            content = (
                <View style={styles.row}>
                    <Forecast
                        main={this.state.forecast.main}
                        temp={this.state.forecast.temp}
                    />
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
                                style={[styles.mainText, styles.zipCode]}
                                onSubmitEditing={this._handleTextChange}
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
}

const styles = StyleSheet.create({
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    zipContainer: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
        width: 80,
        height: textStyles.baseFontSize * 2,
        justifyContent: 'flex-end'
    },
    zipCode: { flex: 1 }
});
