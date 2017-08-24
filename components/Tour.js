import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import MapView from "react-native-maps";
import { Pagination } from 'react-native-snap-carousel'
import { getCurrent, watch, unWatch } from "../util/navigation";
import { Actions } from "react-native-router-flux";

import sitesData from '../const/sitesData';
import TourSites from './TourSites';
import { siteToCoords } from "../util/site";
import MapNumberMarker from "../components/MapNumberMarker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
  },
  map: {
    flex: 1
  }
});

const REGION_EDGE_PADDING = 100;
const OFFSET_FACTOR = 1;
const EDGE_PADDING = {
  top: Math.floor(REGION_EDGE_PADDING * OFFSET_FACTOR),
  right: REGION_EDGE_PADDING,
  bottom: Math.floor(REGION_EDGE_PADDING / OFFSET_FACTOR),
  left: REGION_EDGE_PADDING
};

const { width, height } = Dimensions.get("window");

export default class Tour extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      index: 0
    };

    this.onIndex = this.onIndex.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.getPinCoords = this.getPinCoords.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleLocationError = this.handleLocationError.bind(this);
    this.onFitToRegion = this.onFitToRegion.bind(this);
    this.onCalloutPress = this.onCalloutPress.bind(this);
  }

  componentDidMount() {
    const index = this.props.index || 0;
    const site = sitesData[index];
    this.setState({
      index,
      site
    });

    getCurrent(this.handleLocation, this.handleLocationError);
    this.watchId = watch(this.handleLocation, this.handleLocationError);
    setTimeout(() =>this.onFitToRegion(site), 1000);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onIndex(index) {
    const site = sitesData[index];
    this.setState({
      index, site
    });

    this.onFitToRegion(site);
  }

  handleLocation({latitude, longitude}) {
		this.setState({
      location: {latitude, longitude},
		});
	}

  handleLocationError() {}

  getPinCoords(site) {
    const coords = [siteToCoords(site)];

    if (this.state.location) {
      coords.push(this.state.location);
    }

    return coords;
  }

  onFitToRegion(site) {
    this.map.fitToCoordinates(this.getPinCoords(site), {
      edgePadding: EDGE_PADDING,
      animated: true,
    });
	}

  onCalloutPress() {
    Actions.site({ ...this.state.site });
  }

  render() {
    return (
      <View style={ styles.container }>
        <TourSites
          index={ this.state.index }
          onIndex={this.onIndex}
        />
        <MapView ref={ ref => this.map = ref } style={ styles.map }>
          <MapNumberMarker
            site={this.state.site}
            index={ this.state.index }
            onCalloutPress={ this.onCalloutPress }
          />
          { this.state.location ?
            <MapLocationMarker key="me" coordinate={this.state.location} /> : false
          }
        </MapView>
      </View>
    );
  }
}
