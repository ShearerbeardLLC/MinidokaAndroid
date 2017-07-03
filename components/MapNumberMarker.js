
import React, { Component } from "react"

import { Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import { siteToCoords } from "../util/site";

const SIZE = 20;

const styles = StyleSheet.create({
	numberMarker: {
		width: SIZE,
		height: SIZE,
		borderRadius: SIZE / 2,
		backgroundColor: 'red'
	},
	numberMakerText: {
		...StyleSheet.absoluteFillObject,
		textAlign: 'center',
		color: 'white',
		fontWeight: '900'
	}
});

const MapNumberMarker = ({site, index, onPress, onCalloutPress }) => {

	const {prefix, name, detail} = site;
	const { latitude, longitude } = siteToCoords(site);

	return (
		<MapView.Marker
			title={ name }
			description={ detail }
			onPress={ onPress }
			onCalloutPress={ onCalloutPress }
			coordinate={coordinate}>
			<View style={ styles.numberMarker }>
				<Text style={ styles.numberMakerText }>{ num }</Text>
			</View>
		</MapView.Marker>
	);
};

export default MapNumberMarker;
