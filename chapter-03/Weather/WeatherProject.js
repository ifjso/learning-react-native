import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native'
import Forecast from './Forecast'
import OpenWeatherMap from './open_weather_map'

class WeatherProject extends Component {
    constructor(props) {
        super(props)
        this.state = { zip: "", forecast: null }
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            this.setState({ forecast })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("./flowers.png")} style={styles.background}>
                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>
                            <View style={styles.zipContainer}>
                                <TextInput style={[styles.zipCode, styles.mainText]} 
                                    onSubmitEditing={this._handleTextChange}
                                    underlineColorAndroid="transparent"/>
                            </View>
                        </View>
                        { this.state.forecast && <Forecast {...this.state.forecast} /> }
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const baseFontSize = 16

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30
    },
    background: {
        width: "100%",
        height: "100%"
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: "#000000",
        opacity: 0.5,
        flexDirection: "column",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 30
    },
    zipContainer: {
        height: baseFontSize + 10,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: -1
    },
    zipCode: {
        flex: 1,
        flexBasis: 1,
        width: 50,
        height: baseFontSize
    },
    mainText: {
        fontSize: baseFontSize,
        color: "#FFFFFF"
    }
})

export default WeatherProject
