
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import sitesData from '../const/sitesData';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sitePhoto: {
    backgroundColor: 'transparent',
  }
});

const TourSitePhoto = ({ url, size }) => (
  <TouchableHighlight>
    <Image style={ size } source={ url } />
  </TouchableHighlight>
);

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
    this.renderSite = this.renderSite.bind(this);
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
    return sitesData.map(site =>
      <TourSitePhoto
        key={site.prefix}
        url={site.photos[0].previewUrl}
        size={this.state.size} />
    );
  }

  renderSite({item, index}) {
    return (
      <TourSitePhoto
        key={item.prefix}
        url={item.photos[0].previewUrl}
        size={this.state.size}
      />
    );
  }

  render() {
    return (
      <View
        style={[this.state.size, styles.container]}
        onLayout={ this._onLayoutDidChange }
      >
        <Carousel
          data={ sitesData }
          renderItem={ this.renderSite }
          ref={ carousel => this._carousel = carousel }
          sliderWidth={ this.state.size.width }
          itemWidth={ this.state.size.width }
          onSnapToItem={ this.props.onIndex }
        />
      </View>
    );
  }
}
