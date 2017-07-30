import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";

import styles from "../styles/Container";

import { siteToPhotos } from "../util/site";

import Carousel from 'react-native-looped-carousel';

const { width } = Dimensions.get('window');
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

  constructor(...args) {
    super(...args);

    this.state = {
      size: this.setSize({width})
    }
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setSize(layout);
  }

  _onPageChange(i) {
  }

  setSize({width}) {
    return {
      width,
      height: width * 0.75
    };
  }

  renderImages() {
    const photos = siteToPhotos(this.props);
    return photos.map(({previewUrl}, i) =>
      <Image style={this.state.size} key={i} source={ previewUrl } />)
  }

  render() {
		const { name, subDetail, photos, text } = this.props;
    return (
      <View
        style={ siteContainerStyles }
        onLayout={ this._onLayoutDidChange }>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={ this._onPageChange }
        >
        { this.renderImages() }
        </Carousel>
      </View>
    );
  }
}
