import React, {
	Component
} from "react";
import MapView from 'react-native-maps';
import {
	Text,
	View
} from 'react-native';
import {
	StyleSheet
} from 'react-native';
import {
	DEFAULT_LOCATION
} from "../const/map";
import sitesData from "../const/sites.json";

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: 400,
		width: 400,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default class Map extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			region: DEFAULT_LOCATION
		};

		this.onRegionChange = this.onRegionChange.bind(this);
	}

	onRegionChange(region) {
		this.setState({
			region
		});
	}

	render() {
		return (
			<View style={ styles.container }>
				<MapView
					style={ styles.map }
					region={ this.state.region }
					onRegionChange={ this.onRegionChange }>
				{ sitesData
					.map(({prefix, name, detail, coordinates}) =>
						<MapView.Marker
							key={ prefix }
							title={ name }
							description={ detail }
							coordinate={{
								latitude: coordinates[0].latitude,
								longitude: coordinates[0].longitude
						}} />)
					}
				</MapView>
			</View>
		);
	}
}
