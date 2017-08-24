import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import {FOM_YELLOW} from '../styles/colors';

import styles from "../styles/Container";
import home from "../image/home-landing.jpg"
const { width } = Dimensions.get('window');

const homeStyles = StyleSheet.create({
  textContainer: {
    bottom: 70,
    left: 0,
    zIndex: 1000,
    position: 'absolute',
    padding: 8,
    backgroundColor: 'transparent'
  },
  stripe: {
    height: 20,
    position: 'absolute',
    bottom: 50,
    width: width,
    backgroundColor: FOM_YELLOW
  },
  header: {
    color: 'white',
    fontSize: 26,
  },
  sub: {
    color: 'white',
    fontSize: 18,
    zIndex: 1000,
  }
});

export default class Home extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Image source={home} />
        <View style={homeStyles.textContainer}>
          <Text style={homeStyles.header}>Minidoka</Text>
          <Text style={homeStyles.sub}>National Historic Site</Text>
        </View>
        <View style={homeStyles.stripe}></View>
      </View>
    );
  }
}
