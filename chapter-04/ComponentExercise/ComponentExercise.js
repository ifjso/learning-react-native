import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Strong, Em } from "./Text"


class ComponentExercise extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./assets/flowers.png")} style={styles.image}/>
                <Text>
                    The quick <Em>brown</Em> fox jumped
                    over the lazy <Strong>dog</Strong>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 100,
        height: 100
    }
})

export default ComponentExercise
