import React, { Component } from "react";
import MapView from 'react-native-maps';
import {
  Text,
  View
} from 'react-native';

import styles from "../styles/Container";

export default class Map extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.subContainer }>Map</Text>
      </View>
    );
  }
}
