import React, { Component } from "react";

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";

import containerStyles from "../styles/Container";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 58,
    marginBottom: 50,
    marginLeft: 8,
    marginRight: 8,
  },
  contentContainer: {
    paddingVertical: 40,
    flex: 1,
    padding: 8
  }
});

const SiteTextDetail = ({title, text}) =>
  <View style={ styles.container }>
    <ScrollView>
      <Text style={containerStyles.readable}>{text}</Text>
    </ScrollView>
  </View>;

export default SiteTextDetail;
