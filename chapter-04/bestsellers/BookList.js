import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import BookItem from './BookItem'
import NYT from './NYT'

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        this._refreshData()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data} renderItem={this._renderItem} />
            </View>
        )
    }

    _renderItem = ({ item }) =>
        <BookItem coverURL={item.book_image} title={item.key} author={item.author} />
        
    _addKeysToBooks = books => books.map(book => ({ key: book.title, ...book}))

    _refreshData = () =>
        NYT.fetchBooks().then(books =>this.setState({ data: this._addKeysToBooks(books) }))
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 22 }
})

export default BookList
