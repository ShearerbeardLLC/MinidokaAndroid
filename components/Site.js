import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
} from "react-native";

import SitePhotos from './SitePhotos';
import SiteText from './SiteText';
import SiteBottomBar from './SiteBottomBar';

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 54,
      }
    }),
  },
});

export default class Site extends Component {

  render() {
		const { name, subDetail, photos, text } = this.props;
    return (
      <View style={ styles.column } >
        <SitePhotos {...this.props} />
        <SiteText {...this.props} />
        <SiteBottomBar {...this.props} />
      </View>
    );
  }
}
