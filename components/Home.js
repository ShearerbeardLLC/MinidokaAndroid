import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Storage from 'react-native-storage';
import { Actions } from "react-native-router-flux";

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

const storage = new Storage({
});

function openGrant() {
  storage.save({
    key: "grantconfirmed",
    data: true
  });

  Actions.grant();
}

export default class Home extends Component {

  componentDidMount() {
    storage.load({ key: "grantconfirmed" })
    .then(confirmed => {
      if (!confirmed) {
        openGrant();
      }
    })
    .catch(() => openGrant());
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image source={home} />
        <TouchableHighlight
          style={ homeStyles.logo }
          onPress={ openGrant }>
          <Image  source={logo} />
        </TouchableHighlight>
        <View style={homeStyles.stripe}></View>
      </View>
    );
  }
}
