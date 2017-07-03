
import React, { Component } from "react";
import { View, Dimensions, StyleSheet} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from "react-native-router-flux";
import MapView from 'react-native-maps';

import { DEFAULT_LOCATION } from "../const/map";
import { getCurrent, watch, unWatch } from "../util/navigation";
import sitesData from "../const/sites.json";

const REGION_EDGE_PADDING = 100;
const EDGE_PADDING = {
	top: REGION_EDGE_PADDING,
	right: REGION_EDGE_PADDING,
	bottom: REGION_EDGE_PADDING,
	left: REGION_EDGE_PADDING
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
	locationIcon: {
		fontSize: 40,
		height: 44,
		color: 'blue'
	}
});


export default class Map extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			currentLatitude: null,
			currentLongitude: null,
			hasLocation: false,
			trackingLocation: false
		};

		this.getSiteCords = this.getSiteCords.bind(this);

		this.onPress = this.onPress.bind(this);
		this.onCalloutPress = this.onCalloutPress.bind(this);
		this.onRegionChange = this.onRegionChange.bind(this);
		this.onFitToRegion = this.onFitToRegion.bind(this);
		this.onTrackLocation = this.onTrackLocation.bind(this);
		this.toggleTrackingLocation = this.toggleTrackingLocation.bind(this);

		this.handleLocation = this.handleLocation.bind(this);
		this.handleLocationError = this.handleLocationError.bind(this);

		this.renderLocationMarker = this.renderLocationMarker.bind(this);
		this.renderSites = this.renderSites.bind(this);
		this.renderSitePin = this.renderSitePin.bind(this);
	}

	componentDidMount() {
		getCurrent(this.handleLocation, this.handleLocationError);
		this.watchId = watch(this.handleLocation, this.handleLocationError);
		setTimeout(this.onFitToRegion, 1000);
	}

	siteToCords({coordinates}) {
		return coordinates[0];
	}

	getSiteCords(location) {
		let coords = sitesData.map(this.siteToCords);

		if(location) {
			coords.push(location)
		}

		return coords;
	}

	onPress(i) {
		console.warn('On Press => ' + i);
	}

	onCalloutPress(site) {
		console.warn('On Callout Press => ' + site.prefix);
		Actions.mapSite({ ...site });
	}

	onRegionChange(region) {
		this.setState({region});
	}

	handleLocation({latitude, longitude}, override = false) {
		this.setState({
			currentLatitude: latitude,
			currentLongitude: longitude,
			hasLocation: true
		});

		if (override || this.state.trackingLocation === true) {
			this.map.fitToCoordinates(this.getSiteCords({latitude,longitude}), {
				edgePadding: EDGE_PADDING,
				animated: true,
			});
		}
	}

	handleLocationError(error) {
		this.setState({
			hasLocation: false,
			trackingError: error.message
		});
	}

	toggleTrackingLocation() {

		if(this.state.trackingLocation === true) {
			this.onFitToRegion();
		} else if (this.state.hasLocation) {
			this.handleLocation({
				latitude: this.state.currentLatitude,
				longitude: this.state.currentLongitude
			}, true);
		}

		this.setState({
			trackingLocation: !this.state.trackingLocation,
		});

	}

	onFitToRegion() {
		this.map.fitToCoordinates(this.getSiteCords(), {
			edgePadding: EDGE_PADDING,
			animated: true,
		});

		this.setState({
			trackingLocation: false
		});
	}

	onTrackLocation() {
		this.setState({
			trackingLocation: true
		});
	}

	renderSitePin(site) {
		const {prefix, name, detail} = site;
		const { latitude, longitude } = this.siteToCords(site);

		return (
			<MapView.Marker
				id={ prefix }
				key={ prefix }
				title={ name }
				description={ detail }
				onPress={ () => this.onPress(i) }
				onCalloutPress={ () => this.onCalloutPress(site) }
				coordinate={{latitude, longitude}}
			/>
		);
	}

	renderLocationMarker() {
		const coordinate = {
			latitude: this.state.currentLatitude,
			longitude: this.state.currentLongitude
		};

		return (
			<MapView.Marker id="me" key="me" coordinate={coordinate}>
				<Icon name="md-locate" style={styles.locationIcon} />
			</MapView.Marker>
		);
	}

	renderSites() {
		const { trackingLocation, hasLocation } = this.state;
		const sites = sitesData.map(this.renderSitePin);

		if (trackingLocation === true && hasLocation === true) {
			sites.push(this.renderLocationMarker());
		}

		return sites;
	}

	render() {
		return (
			<View style={ styles.container }>
				<MapView
					style={ styles.map }
					ref={ref => { this.map = ref; }}
					initialRegion={ DEFAULT_LOCATION }
					onRegionChange={ this.onRegionChange }>
					{ this.renderSites() }
				</MapView>
				<ActionButton buttonColor="rgba(231,76,60,1)" offsetX={ 20 } offsetY={ 70 }>
					<ActionButton.Item buttonColor='#3498db' title="Reset" onPress={ this.onFitToRegion }>
						<Icon name="md-refresh" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#1abc9c' title={ this.state.trackingLocation ? "Disable Location" : "Enable Location" } onPress={ this.toggleTrackingLocation }>
						<Icon name="md-navigate" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}
