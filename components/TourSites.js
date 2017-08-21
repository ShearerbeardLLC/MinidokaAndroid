
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

import sitesData from '../const/sites.json';
import { sitesToDefaultPhotos } from '../util/site';

const { width } = Dimensions.get('window');

export default class TourSites extends Component {

  constructor(...args) {
    super(...args);

    const photos = sitesToDefaultPhotos(sitesData);
    const size = this.setSize({width});
    const index = 0;

    this.state ={
      index, size, photos
    };

    this.renderImages = this.renderImages.bind(this);
    this.setSize = this.setSize.bind(this);
    this._onLayoutDidChange = this._onLayoutDidChange.bind(this);
  }

  setSize({width}) {
    return {
      width,
      height: width * 0.56,
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState(this.setSize({ width: layout.width }));
  }

  renderImages() {
    return this.state.photos.map(({ prefix, url }, i) =>
      <TouchableHighlight key={i}>
        <Image style={ this.state.size } source={ url }></Image>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View
        style={[{backgroundColor: 'red'}, this.state.size]}
        onLayout={this._onLayoutDidChange}
      >
        <Carousel
          autoplay={ true }
          arrows={ true }
          style={this.state.size}
        >
          { this.renderImages() }
        </Carousel>
      </View>
    );
  }
}
