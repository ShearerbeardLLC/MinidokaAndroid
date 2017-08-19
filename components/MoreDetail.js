import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class MoreDetail extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Text>{ this.props.name }</Text>
      </View>
    );
  }
}
