import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions
} from "react-native";

import SitePhotos from './SitePhotos';
import SiteText from './SiteText';

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default class Site extends Component {

  render() {
		const { name, subDetail, photos, text } = this.props;
    return (
      <View style={ styles.column } >
        <SitePhotos {...this.props} />
        <SiteText {...this.props} />
      </View>
    );
  }
}
