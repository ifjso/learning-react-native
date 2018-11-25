import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './style';

type Props = {
    children?: React.ReactNode
}

const PhotoBackdrop = (props: Props) =>
    <ImageBackground style={styles.backdrop} source={{uri: './flowers.png'}} resizeMode="cover">
        {props.children}
    </ImageBackground>;

export default PhotoBackdrop;
