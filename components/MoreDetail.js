import locale from 'react-native-locale-detector';
import React, { Component } from "react";
import { Platform } from 'react-native';
import text from "../util/text";
import containerStyles from "../styles/Container";

import Hyperlink from "react-native-hyperlink";
import { FOM_ORANGE } from '../styles/colors';

let prefix;

switch(locale) {
  case 'ja_JP':
    prefix = 'jp_';
    break;
  case 'es_MX':
    prefix = 'sp_';
    break;
  default:
    prefix = '';
}

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

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
    marginBottom: 16
  },
  link: {
    color: FOM_ORANGE
  }
});

export default class MoreDetail extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView >
          <Hyperlink linkDefault={ true } linkStyle={ styles.link }>
            <Text style={ containerStyles.readable }>{ text[`${prefix}about-${this.props.name}`] }</Text>
          </Hyperlink>
        </ScrollView>
      </View>
    );
  }
}
