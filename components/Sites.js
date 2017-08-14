import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';

import sitesData from "../const/sites.json";
import styles from "../styles/Container";

import { Actions } from "react-native-router-flux";

import SitesRow from "../components/SitesRow";

const sitesStyles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 50,
    marginTop: 50
  }
});

class Sites extends Component {
  constructor(...args) {
    super(...args);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a.name !== b.name
    });

    this.state = {
			dataSource: dataSource.cloneWithRows(sitesData)
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(site) {
    Actions.site({...site});
  }

  render() {
    return (
      <ListView style={sitesStyles.list}
        dataSource={ this.state.dataSource }
        renderRow={ site => <SitesRow onPress={this.handlePress} {...site} /> }
      />
    );
  }
}

export default Sites;
