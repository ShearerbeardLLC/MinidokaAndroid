import React, { Component } from "react";

import fullVideo from '../util/video';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Video from 'react-native-video';

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default class VideoPlayer extends Component {

  constructor(...args) {
    super(...args);

    this.state={
      playing: false
    };

    this.onBuffer = this.onBuffer.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.player) this.player.presentFullscreenPlayer();
      this.setState({
        playing: true
      });
    }, 0)
  }

  onBuffer() {
    this.setState({
      playing: false
    });
  }

  onLoad() {
    this.setState({
      playing: true
    });
  }

  onEnd() {
    this.setState({
      playing: false
    });
  }

  render() {
    return (
      <View>
        <Video
          ref={(ref) => {
            this.player = ref
          }}
          rate={1.0}
          volume={1.0}
          muted={false}
          paused={ this.state.playing ? false : true }
          resizeMode="cover"
          repeat={false}
          playInBackground={false}
          playWhenInactive={false}
          style={ styles.video }
          onBuffer={ this.onBuffer }
          onLoad={ this.onLoad }
          onEnd={ this.onEnd }
          source={{
            uri: "https://s3-us-west-2.amazonaws.com/minidoka-nps-ios/root-cellar.m4v"
          }}
        />
      </View>
    );
  }
}
