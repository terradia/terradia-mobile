import React, { Component } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        console.log('Permission non accordée');
    }
    const location = await Location.getCurrentPositionAsync({});
    const currentLocation = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    });
    return (
        currentLocation[0].name +
        ' ' +
        currentLocation[0].city +
        ' ' +
        currentLocation[0].region +
        ' ' +
        currentLocation[0].postalCode +
        ' ' +
        currentLocation[0].country
    );
};

export default getLocationAsync;
