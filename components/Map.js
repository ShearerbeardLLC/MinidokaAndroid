import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import React, {
	Component
} from "react";
import MapView from 'react-native-maps';
import {
	Text,
	View
} from 'react-native';
import {
	StyleSheet,
} from 'react-native';
import {
	DEFAULT_LOCATION
} from "../const/map";

import { getCurrent, watch, unWatch } from "../util/navigation";

import sitesData from "../const/sites.json";

import { Actions } from "react-native-router-flux";

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
});

const REGION_EDGE_PADDING = 100;

export default class Map extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			region: DEFAULT_LOCATION,
			hasLocation: false,
			trackingLocation: false
		};

		this.onPress = this.onPress.bind(this);
		this.onCalloutPress = this.onCalloutPress.bind(this);
		this.onRegionChange = this.onRegionChange.bind(this);
		this.onFitToRegion = this.onFitToRegion.bind(this);
		this.onTrackLocation = this.onTrackLocation.bind(this);
		this.toggleTrackingLocation = this.toggleTrackingLocation.bind(this);

		this.handleLocation = this.handleLocation.bind(this);
		this.handleLocationError = this.handleLocationError.bind(this);
	}

	componentDidMount() {
		getCurrent(this.handleLocation, this.handleLocationError);
		this.watchId = watch(this.handleLocation, this.handleLocationError);
		setTimeout(this.onFitToRegion, 1000);
	}

	siteToCords({coordinates}) {
		return coordinates[0];
	}

	onPress(i) {
		console.warn('On Press => ' + i);
	}

	onCalloutPress(site) {
		console.warn('On Callout Press => ' + site.prefix);
		Actions.mapSite({...site});
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	handleLocation({latitude, longitude}) {
		if (this.state.trackingLocation === true) {
			console.warn("Handle Tracking => latitude, longitude", latitude, longitude);
			this.setState({
				region: Object.assign(this.state.region, {
					latitude,
					longitude
				}),
				hasLocation: true,
				trackingError: null,
			});
		} else {
			console.warn("Don't Handle Tracking => latitude, longitude", latitude, longitude);
		}
	}

	handleLocationError(error) {
		if (this.state.trackingLocation === true) {
			this.setState({
				hasLocation: false,
				trackingError: error.message
			});
		}
	}

	toggleTrackingLocation() {
		this.setState({
			trackingLocation: !this.state.trackingLocation,
			hasLocation: this.state.hasLocation ? false : this.state.hasLocation
		});
	}

	onFitToRegion() {
		this.map.fitToCoordinates(sitesData.map(this.siteToCords), {
			edgePadding: {
				top: REGION_EDGE_PADDING,
				right: REGION_EDGE_PADDING,
				bottom: REGION_EDGE_PADDING,
				left: REGION_EDGE_PADDING
			},
			animated: true,
    });

		this.setState({
			hasLocation: false,
			trackingLocation: false
		});
	}

	onTrackLocation() {
		this.setState({trackingLocation: true});
	}

	render() {
		return (
			<View style={ styles.container }>
				<MapView
					style={ styles.map }
					ref={ref => { this.map = ref; }}
					initialRegion={ this.state.region }
					onRegionChange={ this.onRegionChange }>
				{ sitesData
					.map((site, i) => {
						const {prefix, name, detail, coordinates} = site;

						return (
							<MapView.Marker
								id={ prefix }
								key={ prefix }
								title={ name }
								description={ detail }
								onPress={ () => this.onPress(i) }
								onCalloutPress={ () => this.onCalloutPress(site) }
								coordinate={{
									latitude: coordinates[0].latitude,
									longitude: coordinates[0].longitude
							}} />
						);
					})
				}
				</MapView>
				<ActionButton buttonColor="rgba(231,76,60,1)" offsetX={ 20 } offsetY={ 70 }>
          <ActionButton.Item buttonColor='#3498db' title="Reset" onPress={ this.onFitToRegion }>
            <Icon name="md-refresh" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Toggle Location" onPress={ this.toggleTrackingLocation }>
            <Icon name="md-navigate" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
			</View>
		);
	}
}
