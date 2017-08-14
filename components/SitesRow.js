import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { siteToPhotos } from "../util/site";

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    padding: 8,
    width
  },
  text: {
    color: 'white',
  }
});

class SitesRow extends Component {

  constructor(...args) {
    super(...args);

    const size = this.setSize({width});
    const photos = siteToPhotos(this.props);

    this.state ={
      size, photos
    };
  }

  setSize({width}) {
    return {
      width,
      height: width * 0.56,
    };
  }

  render() {
    return (

      <TouchableHighlight onPress={() => this.props.onPress(this.props)}>
        <View
          key={this.props.prefix}
          style={this.state.size}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.name}</Text>
            <Text style={styles.text}>{this.props.detail}</Text>
          </View>
          <Image
            style={this.state.size}
            source={this.state.photos[0].previewUrl} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default SitesRow;
