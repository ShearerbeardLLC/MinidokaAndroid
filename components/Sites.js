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
      rowHasChanged: (a, b) => a.name !== b.name
    });

    this.state = {
			dataSource: dataSource.cloneWithRows(sitesData)
    };

    /* this.handlePress = this.handlePress.bind(this);*/
  }

  handlePress(site) {
    Actions.site({...site});
  }

  render() {
    return (
      <ListView contentContainerStyle={ styles.container }
        dataSource={ this.state.dataSource }
        renderRow={ site =>
          <Text key={ site.prefix } onPress={ () => this.handlePress(site) }>{ site.name }</Text>
        }
      />
    );
  }
}

export default Sites;
