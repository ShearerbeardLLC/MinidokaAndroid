/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Tabs from "react-native-tabs";
import { ORDER, NAMES_MAP } from "./const/sections";

export default class MinidokaAndroid extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      page: ORDER[0]
    };

    this.handlePageSelect = this.handlePageSelect.bind(this);
  }

  renderTabs() {
    return ORDER.map(key =>
      <Text key={ key } name={ key }>{ NAMES_MAP[key] }</Text>
    );
  }

  handlePageSelect({props}) {
    this.setState({ page: props.name });
  }

  render() {
    const self = this;

    return (
      <View style={styles.container}>
        <Tabs
          selected={ this.state.page }
          style={{ backgroundColor: "white" }}
          selectedStyle={{ color: "red" }}
          onSelect={ this.handlePageSelect } >
          { this.renderTabs() }
        </Tabs>
        <Text>{ this.state.page }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MinidokaAndroid', () => MinidokaAndroid);
