
import React, { Component } from "react";
import {
  Image,
  Dimensions
} from "react-native";
import Carousel from 'react-native-looped-carousel';

import { siteToPhotos } from "../util/site";

const { width } = Dimensions.get('window');

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
    );
  }
}
