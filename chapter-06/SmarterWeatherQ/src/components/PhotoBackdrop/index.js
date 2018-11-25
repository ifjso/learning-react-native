import React, { Component } from 'react';
import { ImageBackground, CameraRoll } from 'react-native';
import styles from './style';

type Props = {
    children?: React.ReactNode
};

type State = {
    photoSource: string
};

class PhotoBackdrop extends Component<Props, State> {
    state = {
        photoSource: null
    }

    componentDidMount() {
        CameraRoll.getPhotos({ first: 2 })
            .then(
                data => this.setState({ photoSource: { uri: data.edges[4].node.image.uri }}),
                error => console.warn(error)
            );
    }

    render() {
        return (
            <ImageBackground style={styles.backdrop} source={this.state.photoSource} resizeMode="cover">
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default PhotoBackdrop;
