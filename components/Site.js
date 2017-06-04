import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class Site extends Component {
  render() {
    return (
      <View>
        <Text>Site: { this.props.name || "Uh Oh" }</Text>
      </View>
    );
  }
}
