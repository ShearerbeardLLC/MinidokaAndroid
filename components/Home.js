import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { getCurrent, watch, unWatch } from "../util/navigation";

import styles from "../styles/Container";

export default class Home extends Component {
	constructor(args) {
		super(...args);
		this.state = {
			latitude: null,
			longitude: null,
			error: null,
		};

		this.handleLocation = this.handleLocation.bind(this);
		this.handleLocationError = this.handleLocationError.bind(this);
	}

	componentDidMount() {
		getCurrent(this.handleLocation, this.handleLocationError);
		this.watchId = watch(this.handleLocation, this.handleLocationError);
	}

	componentWillUnmount() {
		unWatch(this.watchId);
	}

	handleLocation({latitude, longitude}) {
		this.setState({
			latitude, longitude,
			error: null,
		});
	}

	handleLocationError(error) {
		this.setState({ error: error.message });
	}

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.subContainer }>Home</Text>
				<Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}
