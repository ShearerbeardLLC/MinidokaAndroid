import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import {
  BG_GREY,
  FOM_ORANGE
} from '../styles/colors';

import backgroundImage from '../image/more-background.png';
import parkInformationImage from '../image/more-info.png';
import directionsImage from '../image/more-directions.png';
import safteyAndInformationImage from '../image/more-saftey.png';
import aboutImage from '../image/more-about.png';

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

export default class More extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.verticalContainer }>
          <View style={ styles.aboutCell }>
            <Image source={backgroundImage} />
            <Text style={styles.aboutCellText}>Background</Text>
          </View>
          <View style={ styles.aboutCell }>
            <Image source={parkInformationImage} />
            <Text style={styles.aboutCellText}>Info</Text>
          </View>
        </View>
        <View style={ styles.verticalContainer }>
          <View style={ styles.aboutCell }>
            <Image source={directionsImage} />
            <Text style={styles.aboutCellText}>Directions</Text>
          </View>
          <View style={ styles.aboutCell }>
            <Image source={safteyAndInformationImage} />
            <Text style={styles.aboutCellText}>Saftey</Text>
          </View>
        </View>
        <View style={ styles.verticalContainer }>
          <View style={ styles.aboutCell }>
            <Image source={aboutImage} />
            <Text style={styles.aboutCellText}>About</Text>
          </View>
          <View style={ styles.aboutCell }>
          </View>
        </View>
      </View>
    );
  }
}
