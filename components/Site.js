import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions
} from "react-native";

import styles from "../styles/Container";
import SitePhotos from './SitePhotos';

const viewStyles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

const siteContainerStyles = StyleSheet.flatten([
  styles.container,
  viewStyles.column
]);

export default class Site extends Component {

  render() {
		const { name, subDetail, photos, text } = this.props;
    return (
      <View style={ siteContainerStyles } >
        <SitePhotos {...this.props} />
      </View>
    );
  }
}
