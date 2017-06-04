import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import styles from "../styles/Container";

export default class Home extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.subContainer }>Home</Text>
      </View>
    );
  }
}
