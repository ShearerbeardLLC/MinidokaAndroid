import React, { Component } from "react";
import {
  Text,
  View
} from 'react-native';

import styles from "../styles/Container";

export default class Tour extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.subContainer }>Tour</Text>
      </View>
    );
  }
}
