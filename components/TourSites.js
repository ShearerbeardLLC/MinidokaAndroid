
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import sitesData from '../const/sitesData';

import Carousel from 'react-native-snap-carousel';
import { TRANS } from '../styles/colors'

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    zIndex: 1000,
    flexDirection: 'column',
    backgroundColor: TRANS,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: 8,
  },
  text: {
    color: 'white'
  }
});

const TourSitePhoto = ({ name, url, size, width, index, length }) => (
  <TouchableHighlight>
    <View style={size}>
      <Image style={ size } source={ url } />
      <View style={ [{width}, styles.textContainer]}>
        <Text style={ styles.text }>{ `${name} (${index +1 } of ${ length })` }</Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default class TourSites extends Component {

  constructor(...args) {
    super(...args);

    const size = this.setSize({width});
    const index = 0;

    this.state ={
      index, size, sites: sitesData.slice(0), init: false
    };

    this.setSize = this.setSize.bind(this);
    this.renderSite = this.renderSite.bind(this);
    this._onLayoutDidChange = this._onLayoutDidChange.bind(this);
    this.init = this.init.bind(this);
  }

  init() {
    this.setState({init: true});
  }

  componentDidMount() {
    setTimeout(this.init, 0);
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

  renderSite({item, index}) {
    return item ? (
      <TourSitePhoto
        length={ sitesData.slice(0).length }
        index={index}
        name={item.name}
        width={ this.state.size.width }
        key={item.prefix}
        url={item.photos[0].previewUrl}
        size={this.state.size}
      />
    ) : false;
  }

  render() {
    return (
      <View
        style={[this.state.size, styles.container]}
        onLayout={ this._onLayoutDidChange }
      >
        { this.state.init ?
          <Carousel
            data={ sitesData.slice(0) }
            firstItem={ this.props.index }
            renderItem={ this.renderSite }
            ref={ carousel => this._carousel = carousel }
            sliderWidth={ this.state.size.width }
            itemWidth={ this.state.size.width }
            onSnapToItem={ this.props.onIndex }
            scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
          /> : <View style={[this.state.size, { backgroundColor: 'black' }]}></View>}
      </View>
    );
  }
}
