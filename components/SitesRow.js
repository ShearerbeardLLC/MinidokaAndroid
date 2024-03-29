import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

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
  titleText: {
    color: 'white',
    fontSize: 16
  },
  detailText: {
    color: 'white',
  }
});

class SitesRow extends Component {

  constructor(...args) {
    super(...args);

    const size = this.setSize({width});

    this.state ={
      size
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
            <Text style={styles.titleText}>{this.props.name}</Text>
            <Text style={styles.detailText}>{this.props.detail}</Text>
          </View>
          <Image
            style={this.state.size}
            source={this.props.photos[0].previewUrl} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default SitesRow;
