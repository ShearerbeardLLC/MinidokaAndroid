import React, { Component } from "react";

import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  marker: {
    fontSize: 40,
    height: 44,
    color: 'blue'
  }
});

const MapLocationMarker = ({coordinate}) => (
  <MapView.Marker key="me" coordinate={coordinate}>
    <Icon name="md-locate" style={styles.marker} />
  </MapView.Marker>
);

export default MapLocationMarker;
