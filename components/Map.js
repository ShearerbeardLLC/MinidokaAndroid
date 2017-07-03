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

export default class Map extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			region: DEFAULT_LOCATION
		};

		this.onPress = this.onPress.bind(this);
		this.onCalloutPress = this.onCalloutPress.bind(this);
		this.onRegionChange = this.onRegionChange.bind(this);
		this.onResetRegion = this.onResetRegion.bind(this);
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

	onResetRegion() {
		this.setState({
			region: DEFAULT_LOCATION
		});
	}

	render() {
		return (
			<View style={ styles.container }>
				<MapView
					style={ styles.map }
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
          <ActionButton.Item buttonColor='#3498db' title="Reset" onPress={() => {}}>
            <Icon name="md-refresh" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Toggle Location" onPress={() => {}}>
            <Icon name="md-navigate" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
			</View>
		);
	}
}
