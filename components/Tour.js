import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column'
  },
  map: {
    flex: 1
  }
});

import TourSites from './TourSites';

export default class Tour extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      index: 0
    };

    this.onIndex = this.onIndex.bind(this);
  }

  componentDidMount() {
    this.setState({index: this.props.index || 0})
  }

  onIndex(i) {
    this.setState({index: i})
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <TourSites index={ this.state.index } onIndex={this.onIndex} />
        </View>
        <Text>{ this.state.index }</Text>
        <View style={ styles.map } ></View>
      </View>
    );
  }
}
