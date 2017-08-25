import React, { Component } from "react";

import fullVideo from '../util/video';

import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Video from 'react-native-video-player';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        top: 64,
      },
      android: {
        top: 54,
      }
    })
  }
});

export default class VideoPlayer extends Component {

  constructor(...args) {
    super(...args);

    this.state={
      playing: false
    };

    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      /* if (this.player) this.player.presentFullscreenPlayer();*/
      this.setState({
        playing: true
      });
    }, 0)
  }

  onEnd() {
    /* this.setState({
     *   playing: false
     * });*/
  }

  render() {
    return (
      <View style={ styles.container }>
        <Video
          video={{
            uri: "https://s3-us-west-2.amazonaws.com/minidoka-nps-ios/root-cellar.m4v"
          }}
        />
      </View>
    );
  }
}
