import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import MapView from "react-native-maps";

import sitesData from '../const/sitesData';
import TourSites from './TourSites';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1
  }
});

export default class Tour extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      index: 0
    };

    this.onIndex = this.onIndex.bind(this);
  }

  componentDidMount() {
    this.setState({index: this.props.index || 0})
  }

  onIndex(i) {
    this.setState({index: i})
  }

  render() {
    return (
      <View style={ styles.container }>
        <TourSites
          index={ this.state.index }
          onIndex={this.onIndex}
        />
        <MapView style={ styles.map }>
        </MapView>
      </View>
    );
  }
}
