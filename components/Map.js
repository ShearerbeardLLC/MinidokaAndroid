import React, { Component } from "react";
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
