
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import Carousel from 'react-native-looped-carousel';

import { siteToPhotos } from "../util/site";

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1000,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 50,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  floatingText: {
    color: 'white',
    marginLeft: 8
  }
});

export default class SitePhotos extends Component {

  constructor(...args) {
    super(...args);

    this.state ={
      size: this.setSize({width})
    };
  }

  setSize({width}) {
    return {
      width,
      height: width * 0.75,
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setSize(layout);
  }

  _onPageChange(i) {
  }

  renderImages() {
    const photos = siteToPhotos(this.props);
    return photos.map(({previewUrl}, i) =>
      <Image style={this.state.size} key={i} source={ previewUrl } />)
  }

  render() {
    return (
      <View style={this.state.size}>
        <View style={styles.floating}>
          <Text style={styles.floatingText}>Test</Text>
          <Text style={styles.floatingText}>Test</Text>
        </View>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onLayout={ this._onLayoutDidChange }
          onAnimateNextPage={ this._onPageChange }
        >
          { this.renderImages() }
        </Carousel>
      </View>
    );
  }
}
