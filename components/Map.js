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
			region: DEFAULT_LOCATION,
			stuff: "Start"
		};

		this.onRegionChange = this.onRegionChange.bind(this);
	}

	onRegionChange(region) {
		this.setState({
			region
		});
	}

	onPress(key, i) {
		console.warn('On Press', key, i);
	}

	render() {
		return (
			<View style={ styles.container }>
				<MapView
					style={ styles.map }
					region={ this.state.region }
					onRegionChange={ this.onRegionChange }>
				{ sitesData
					.map(({prefix, name, detail, coordinates}, i) =>
						<MapView.Marker
							id={ prefix }
							key={ prefix }
							title={ name }
							description={ detail }
							onPress={ () => this.onPress.bind(this)(prefix, i) }
							coordinate={{
								latitude: coordinates[0].latitude,
								longitude: coordinates[0].longitude
						}} />)
					}
				</MapView>
				<Text>{ this.state.stuff }</Text>
			</View>
		);
	}
}
