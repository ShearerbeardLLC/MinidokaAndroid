import React, { Component } from "react";

import fullVideo from '../util/video';

import {
  Text,
  View,
  Platform,
  ListView,
  Dimensions,
  StyleSheet,
  TouchableHighlight
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
  },
  list: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  video: {
    backgroundColor: 'black',
  },
  rowText: {
    marginLeft: 12,
    fontSize: 16,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

const VideoListRow = ({ url, onSelect }) => (
  <TouchableHighlight
    key={url}
    onPress={onSelect}
  >
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>
        {url}
      </Text>
    </View>
  </TouchableHighlight>
);

class VideoList extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      dataSource: null
    };
  }

  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a.key !== b.key
    });

    this.setState({
      dataSource: dataSource.cloneWithRows(this.props.videos)
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={
          video =>
            <VideoListRow
              key={video.key}
              onSelect={() => this.props.onSelect(video)} url={video.uri}
            />
        }
        renderSeparator={
          (sectionId, rowId) => <View key={rowId} style={styles.separator} />
        }
      />
    );
  }
}

export default class VideoPlayer extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      videos: [
        {
          key: "1",
          uri: "https://s3-us-west-2.amazonaws.com/minidoka-nhs-mobile/barracks-as-classrooms-1.m4v"
        },
        {
          key: "2",
          uri: "https://s3-us-west-2.amazonaws.com/minidoka-nps-ios/root-cellar.m4v"
        }
      ],
      selected: null
    };

    this.select = this.select.bind(this);
  }

  select(video) {
    this.setState({
      selected: video
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.video}>
          <Video
            autoplay={true}
            video={{
              uri: this.state.selected ? this.state.selected.uri : null
            }}
          />
        </View>
        <View style={ styles.list }>
          <VideoList videos={this.state.videos} onSelect={this.select} />
        </View>
      </View>
    );
  }
}
