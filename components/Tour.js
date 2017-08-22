import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column'
  },
  map: {
    flex: 1
  }
});

import TourSites from './TourSites';

export default class Tour extends Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <TourSites />
        </View>
        <View style={ styles.map } ></View>
      </View>
    );
  }
}
