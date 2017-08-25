import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';
import { FOM_GREY } from '../styles/colors';

import styles from "../styles/Container";
import home from "../image/home-landing.jpg"
import logo from "../image/fom-white-logo.png"
const { width } = Dimensions.get('window');

const homeStyles = StyleSheet.create({
  logo: {
    bottom: 80,
    left: 10,
    zIndex: 1000,
    position: 'absolute',
  },
  stripe: {
    height: 20,
    position: 'absolute',
    bottom: 50,
    width: width,
    backgroundColor: FOM_GREY
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
        <Image style={ homeStyles.logo } source={logo} />
        <View style={homeStyles.stripe}></View>
      </View>
    );
  }
}
