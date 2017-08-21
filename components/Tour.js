import React, { Component } from "react";
import {
  Text,
  View
} from 'react-native';

import styles from "../styles/Container";
import TourSites from './TourSites';

export default class Tour extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <TourSites />
        <Text style={ styles.subContainer }>Tour</Text>
      </View>
    );
  }
}
