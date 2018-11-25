import React from 'react';
import Button from '../Button';

type Props = {
    onGetCoords: (lat: number, lon: number) => void
}

const LocationButton = (props: Props) => {
    const _onPress = () => {
        navigator.geolocation.getCurrentPosition(
            initialPosition => props.onGetCoords(initialPosition.coords.latitude, initialPosition.coords.longitude),
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
    
    return (
        <Button label="Use Current Location" style={style} onPress={_onPress} />
    );
};

const style = { backgroundColor: '#DDDDDD' };

export default LocationButton;
