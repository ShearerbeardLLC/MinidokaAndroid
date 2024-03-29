import React, { Component } from "react";

import {
  Alert,
  StyleSheet,
  ScrollView,
  Platform,
  Text,
  View,
} from "react-native";

import { FOM_ORANGE } from '../styles/colors';
import containerStyles from "../styles/Container";
import Hyperlink from "react-native-hyperlink";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        top: 72,
      },
      android: {
        top: 54,
      }
    }),
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16,
  },
  link: {
    color: FOM_ORANGE
  }
});

const parseText = uri => {
  return decodeURI(uri.split("/")[3]);
}

const handleGlossary = uri => {
  const split = uri.split("/");
  const title = decodeURI(split[3]);
  const text = decodeURI(split[4]);
  Alert.alert(title, text);
}

const SiteTextDetail = ({title, text}) =>
  <View style={ styles.container }>
    <ScrollView>
      <Hyperlink
        linkText={ parseText }
        onPress={ handleGlossary }
        linkStyle={ styles.link }
      >
        <Text style={containerStyles.readable}>{text}</Text>
      </Hyperlink>
    </ScrollView>
  </View>;

export default SiteTextDetail;
