import React, { Component } from "react";

import {
  StyleSheet,
  View,
} from "react-native";

import { FOM_GREY } from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: FOM_GREY,
    alignSelf: 'stretch'
  }
});

export default class SiteBottomBar extends Component {
  render () {
    return <View style={ styles.container }></View>
  }
}
