import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class MoreDetail extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Text>Test</Text>
      </View>
    );
  }
}
