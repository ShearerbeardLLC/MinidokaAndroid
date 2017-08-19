import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import { Actions } from "react-native-router-flux";

import {
  BG_GREY,
  FOM_ORANGE
} from '../styles/colors';

import backgroundImage from '../image/more-background.png';
import parkInformationImage from '../image/more-info.png';
import directionsImage from '../image/more-directions.png';
import safteyAndInformationImage from '../image/more-saftey.png';
import aboutImage from '../image/more-about.png';
import monumentImage from '../image/more-monument.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: BG_GREY,
    marginTop: 50,
    marginBottom: 50
  },
  verticalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  aboutCell: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutCellText: {
    marginTop: 8,
    color: FOM_ORANGE
  }
});

const AboutCell = ({name, image, text}) => (
  <View style={ styles.aboutCell }>
    <TouchableHighlight onPress={ () => Actions.moreDetail({name, text}) }>
      <Image source={image} />
    </TouchableHighlight>
    <Text style={styles.aboutCellText}>{text}</Text>
  </View>
);

export default class More extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.verticalContainer }>
          <AboutCell name='background' image={backgroundImage} text='Background' />
          <AboutCell name='info' image={parkInformationImage} text="Info" />
        </View>
        <View style={ styles.verticalContainer }>
          <AboutCell name='directions' image={directionsImage} text='Directions' />
          <AboutCell name='safety' image={safteyAndInformationImage} text="Safety" />
        </View>
        <View style={ styles.verticalContainer }>
          <AboutCell name='friends-of-minidoka' image={aboutImage} text='Friends of Minidoka' />
          <AboutCell name='bainbridge-island' image={monumentImage} text='Bainbridge Island' />
        </View>
      </View>
    );
  }
}
