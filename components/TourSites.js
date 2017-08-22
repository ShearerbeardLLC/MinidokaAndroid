
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
import { siteToPhotos } from "../util/site";

const { width } = Dimensions.get('window');

const TourSitePhoto = ({ index, size }) => {
  const site = sitesData[index];
  const url = siteToPhotos(site)[0].previewUrl

  return(
    <TouchableHighlight>
      <Image
        style={ size }
        source={ url } />
    </TouchableHighlight>
  );
}

export default class TourSites extends Component {

  constructor(...args) {
    super(...args);

    const size = this.setSize({width});
    const index = 0;

    this.state ={
      index, size
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

  renderImages(data) {
    const photos = [];
    for (let i = 0; i < 20; i++) {
      photos.push(<TourSitePhoto key={i} index={i} size={this.state.size} />)
    }

    return photos;
  }

  render() {
    return (
      <View
        style={this.state.size}
        onLayout={ this._onLayoutDidChange }
      >
        <Carousel
          autoPlay={ false }
          arrows={ true }
          style={this.state.size}
          currentPage={this.props.index}
          onAnimateNextPage={this.props.onIndex}
        >
          { this.renderImages(sitesData) }
        </Carousel>
      </View>
    );
  }
}