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

const VideoListRow = ({ key, name , onSelect }) => (
  <TouchableHighlight onPress={onSelect}>
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>
        {name}
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
              onSelect={() => this.props.onSelect(video)}
              name={video.name}
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
      selected: null,
    };

    this.select = this.select.bind(this);
  }

  select(video) {
    this.setState({
      selected: video,
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.video}>
          { this.state.selected ? <Video
            autoplay={ true }
            resizeMode="cover"
            video={{
              uri: this.state.selected.uri
            }}
          /> : false }
        </View>
        <View style={ styles.list }>
          <VideoList videos={this.props.videos} onSelect={this.select} />
        </View>
      </View>
    );
  }
}
