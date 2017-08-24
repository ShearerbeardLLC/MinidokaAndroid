
import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from "react-native-router-flux";
import MapView from "react-native-maps";

import { DEFAULT_LOCATION } from "../const/map";
import { getCurrent, watch, unWatch } from "../util/navigation";
import MapPinMarker from '../components/MapPinMarker';
import MapLocationMarker from "../components/MapLocationMarker"
import sitesData from "../const/sitesData";

import { FOM_ORANGE } from '../styles/colors';

import { siteToCoords } from "../util/site";

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
    backgroundColor: 'transparent',
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
	numberMaker: {
		...StyleSheet.absoluteFillObject,
		textAlign: 'center',
		color: 'white',
		fontWeight: '900'
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

		this.onCalloutPress = this.onCalloutPress.bind(this);
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

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

	getSiteCords(location) {
		let coords = sitesData.map(siteToCoords);

		if (location) {
			coords.push(location)
		}

		return coords;
	}


	onCalloutPress(site) {
		Actions.site({ ...site });
	}

	handleLocation({latitude, longitude}) {
		this.setState({
			currentLatitude: latitude,
			currentLongitude: longitude,
			hasLocation: true
		});

		if (this.state.trackingLocation === true) {
			this.map.animateToCoordinate({latitude, longitude});
		}
	}

	handleLocationError(error) {
		this.setState({
			hasLocation: false,
			trackingError: error.message
		});
	}

	toggleTrackingLocation() {

		if (this.state.trackingLocation === false && this.state.hasLocation) {
			const location = {
				latitude: this.state.currentLatitude,
				longitude: this.state.currentLongitude
			};

			this.onFitToRegion(location);
			setTimeout(() => this.map.animateToCoordinate(location), 200);
		}	else {
			this.onFitToRegion();
		}

		this.setState({
			trackingLocation: !this.state.trackingLocation,
		});

	}

	onFitToRegion(location) {
		this.map.fitToCoordinates( location ? this.getSiteCords(location) : this.getSiteCords(), {
			edgePadding: EDGE_PADDING,
			animated: true,
		});

		if (!location) {
			this.setState({
				trackingLocation: false
			});
		}
	}

	onTrackLocation() {
		this.setState({
			trackingLocation: true
		});
	}

	renderSitePin(site, i) {
		return (
			<MapPinMarker
				key={ site.prefix }
				site={ site }
				onCalloutPress={ () => this.onCalloutPress(site) }
			/>
		);
	}

	renderLocationMarker() {
		const coordinate = {
			latitude: this.state.currentLatitude,
			longitude: this.state.currentLongitude
		};

    return <MapLocationMarker key="me" coordinate={coordinate} />;
	}

	renderSites() {
		const { trackingLocation, hasLocation } = this.state;
		const sites = sitesData.map(this.renderSitePin);

		if (hasLocation === true) {
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
					initialRegion={ DEFAULT_LOCATION }>
					{ this.renderSites() }
				</MapView>
				<ActionButton
          buttonColor={ FOM_ORANGE }
          offsetX={ 20 }
          offsetY={ 70 }
        >
					<ActionButton.Item
            buttonColor={ FOM_ORANGE }
            textStyle={{color: 'white', backgroundColor: 'black'}}
            textContainerStyle={{backgroundColor: 'black'}}
            title="Reset"
            onPress={ this.onFitToRegion }>
						<Icon name="md-refresh" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item
            buttonColor={ FOM_ORANGE }
            textStyle={{color: 'white', backgroundColor: 'black'}}
            textContainerStyle={{backgroundColor: 'black'}}
            title={ this.state.trackingLocation ? "Disable Location" : "Enable Location" }
            onPress={ this.toggleTrackingLocation }>
						<Icon name="md-navigate" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}
