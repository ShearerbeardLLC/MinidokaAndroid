import React, { Component } from "react";
import text from "../util/text.js";

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 58,
    marginBottom: 50,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default class MoreDetail extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView >
          <Text>{ text[`about-${this.props.name}`] }</Text>
        </ScrollView>
      </View>
    );
  }
}
