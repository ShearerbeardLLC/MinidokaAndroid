import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';


class Sites extends Component {
  constructor(...args) {
    super(...args);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a !== b
    });

    this.state = {
      dataSource: dataSource.cloneWithRows([
        "Administration",
        "Block 23"
      ])
    };
  }

  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ txt => <Text>{ txt }</Text> }
      />
    );
  }
}

export default Sites;
