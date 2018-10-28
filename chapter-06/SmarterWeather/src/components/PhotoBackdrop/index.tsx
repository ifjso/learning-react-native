import React, { Component } from 'react';
import { ImageBackground, CameraRoll } from 'react-native';

import styles from './styles';

type Props = {
    children: React.ReactNode,
};

type State = {
    photoSource: { uri: string },
};

class PhotoBackdrop extends Component<Props, State> {
    constructor (props) {
        super(props);
        this.state = { photoSource: null };
    }

    public componentDidMount () {
        CameraRoll.getPhotos({ first: 1 })
            .then(
                data => this.setState({ photoSource: { uri: data.edges[3].node.image.uri } }),
                error => console.warn(error),
            );
    }

    public render () {
        return (
            <ImageBackground
                style={styles.backdrop}
                source={this.state.photoSource}
                resizeMode="cover"
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default PhotoBackdrop;
