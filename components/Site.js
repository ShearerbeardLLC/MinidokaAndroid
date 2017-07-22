import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "../styles/Container";

import { siteToPhotos } from "../util/site";

export default class Site extends Component {

  constructor(...args) {
    super(...args);
  }

  renderImages() {
    const photos = siteToPhotos(this.props);
    return photos.map(({previewUrl}, i) =>
      <Image key={i} source={ previewUrl } />)
  }

  render() {
		const { name, subDetail, photos, text } = this.props;
    return (
      <View style={ styles.container }>
        <Text>Site: { name || "Uh Oh" }</Text>
				<Text>{ subDetail }</Text>
        { this.renderImages() }
      </View>
    );
  }
}
