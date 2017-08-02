import React, { Component } from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';

import sitesData from "../const/sites.json";
import styles from "../styles/Container";

import { Actions } from "react-native-router-flux";

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
      <ListView contentContainerStyle={ styles.container }
        dataSource={ this.state.dataSource }
        renderRow={ site =>
					<View key={ site.prefix }>
						<Text onPress={ () => this.handlePress(site) }>{ site.name }</Text>
						<Text onPress={ () => this.handlePress(site) }>{ site.detail }</Text>
					</View>
        }
      />
    );
  }
}

export default Sites;
