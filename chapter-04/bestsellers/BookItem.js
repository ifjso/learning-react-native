import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const BookItem = ({coverURL, author, title}) =>
    <View style={styles.bookItem}>
        <Image style={styles.cover} source={{ uri: coverURL }}/>
        <View style={styles.info}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 2,
        padding: 5,
        height: 175
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: "contain"
    },
    info: {
        flex: 3,
        alignItems: "flex-end",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20
    },
    author: { fontSize: 18 },
    title: { fontSize: 18, fontWeight: "bold" }
})

export default BookItem
