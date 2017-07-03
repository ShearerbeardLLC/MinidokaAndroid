
import React, { Component } from "react";

import { Text, View, StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

import { siteToCoords } from "../util/site";

const MapPinMarker = ({ site, onPress, onCalloutPress }) => {
	const { prefix, name, detail } = site;
	const { latitude, longitude } = siteToCoords(site);

	return (
		<MapView.Marker
			id={ prefix }
			title={ name }
			description={ detail }
			onPress={ onPress }
			onCalloutPress={ onCalloutPress }
			coordinate={{latitude, longitude}}
		/>
	);
}

export default MapPinMarker;
