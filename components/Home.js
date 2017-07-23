import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import styles from "../styles/Container";

import text from "../util/text";

export default class Home extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.subContainer }>Home</Text>
        <Text>{ text["administrative-area-1"] }</Text>
      </View>
    );
  }
}
