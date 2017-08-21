import React, { Component } from "react";
import text from "../util/text";
import containerStyles from "../styles/Container";

import Hyperlink from "react-native-hyperlink";

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
  link: {
    color: '#2980b9'
  }
});

export default class MoreDetail extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView >
          <Hyperlink linkDefault={ true } linkStyle={ styles.link }>
            <Text style={ containerStyles.readable }>{ text[`about-${this.props.name}`] }</Text>
          </Hyperlink>
        </ScrollView>
      </View>
    );
  }
}
