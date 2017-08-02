
import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ListView,
  StyleSheet
} from "react-native";

import { Actions } from "react-native-router-flux";
import mainStyles from "../styles/Container";
import { siteToPhotos } from "../util/site";
import text from "../util/text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
    backgroundColor: 'blue'
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
});

export default class SiteText extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      dataSource: null
    };
  }

  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a.name !== b.name
    });

    this.setState({
      dataSource: dataSource.cloneWithRows(this.props.text)
    });
  }

  handlePress({name, file}) {
  }

  renderRow({name}) {
    return (
      <View style={ styles.rowContainer }>
        <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={styles.photo}
        />
        <Text style={ styles.text }>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={ styles.container }
        dataSource={ this.state.dataSource }
        renderRow={ this.renderRow }
      />
    );
  }
}
