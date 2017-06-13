import React, { Component } from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';

import sitesData from "../const/sites.json";
import styles from "../styles/Container";

import { Router, Scene, Actions } from "react-native-router-flux";

class Sites extends Component {
  constructor(...args) {
    super(...args);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a !== b
    });

    this.state = {
			dataSource: dataSource.cloneWithRows(
				sitesData.map(({name}) => name)
			)
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(txt) {
    Actions.site({name: txt});
  }

  render() {
    return (
      <ListView contentContainerStyle={ styles.container }
        dataSource={ this.state.dataSource }
        renderRow={ txt =>
          <Text key={ txt } onPress={ () => this.handlePress(txt) }>{ txt }</Text>
        }
      />
    );
  }
}

export default Sites;
