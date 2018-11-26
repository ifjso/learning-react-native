import React from 'react';
import Button from '../Button';

type Props = {
    onGetCoords: (latitude: number, longitude: number) => void
};

const LocationButton = (props: Props) => {
    const _onPress = () =>
        navigator.geolocation.getCurrentPosition(
            position => props.onGetCoords(position.coords.latitude, position.coords.longitude),
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

    return <Button label="Use Current Location" style={style} onPress={_onPress} />;
};

const style = {
    backgroundColor: '#DDDDDD'
};

export default LocationButton;
