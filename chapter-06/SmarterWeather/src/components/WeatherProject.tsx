import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage,
    Image,
} from 'react-native';

import Forecast from './Forecast';
import LocationButton from './LocationButton';
import textStyles, { baseFontSize } from '../styles/typography';

const STORAGE_KEY = "@SmarterWeather:zip";

import openWeatherMap from './openWeatherMap';

import PhotoBackdrop from './PhotoBackdrop/localImage';
// import PhotoBackdrop from './PhotoBackdrop';

type State = { forecast: any };

class WeatherProject extends Component<{}, State> {
    constructor (props) {
        super(props);
        this.state = { forecast: null };
    }

    public componentDidMount () {
        AsyncStorage
            .getItem(STORAGE_KEY)
            .then(value => value && this._getForecastForZip(value))
            .catch(error => console.error("AsyncStorage error: " + error.message));
    }

    public render () {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <View style={styles.row}>
                    <Forecast
                        main={this.state.forecast.main}
                        description={this.state.forecast.description}
                        temp={this.state.forecast.temp}
                        name={this.state.forecast.name}
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
                                style={[textStyles.mainText, styles.zipCode]}
                                onSubmitEditing={this._handleTextChange}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <LocationButton onGetCoords={this._getForecastForCoords}/>
                    </View>

                    {content}

                </View>
            </PhotoBackdrop>
        );
    }

    private _getForecastForZip = (zip: string) => {
        AsyncStorage
            .setItem(STORAGE_KEY, zip)
            .then(() => console.log(`Saved selection to disk: ${zip}`))
            .catch(error => console.log(`AsyncStorage error: ${error.message}`));

        openWeatherMap
            .fetchZipForecast(zip)
            .then(forecast => this.setState({ forecast }));
    }

    private _getForecastForCoords = (lat: number, lon: number) => {
        openWeatherMap
            .fetchLatLonForecast(lat, lon)
            .then(forecast => this.setState({ forecast }));
    }

    private _handleTextChange = event => {
        const zip = event.nativeEvent.text;
        this._getForecastForZip(zip);
    }
}

const styles = StyleSheet.create({
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
    row: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    zipContainer: {
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
        width: 80,
        height: baseFontSize * 2,
        justifyContent: "flex-end",
    },
    zipCode: { flex: 1 },
});

export default WeatherProject;
