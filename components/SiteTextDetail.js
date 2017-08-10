import React, { Component } from "react";

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
  contentContainer: {
    paddingVertical: 40,
    flex: 1,
    padding: 8
  }
});

const SiteTextDetail = ({title, text}) =>
  <View style={ styles.container }>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text>{text}</Text>
    </ScrollView>
  </View>;

export default SiteTextDetail;
