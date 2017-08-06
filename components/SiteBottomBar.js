import React, { Component } from "react";

import {
  StyleSheet,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'blue',
    alignSelf: 'stretch'
  }
});

export default class SiteBottomBar extends Component {
  render () {
    return <View style={ styles.container }></View>
  }
}
