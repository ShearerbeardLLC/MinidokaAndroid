
import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ListView,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import { Actions } from "react-native-router-flux";
import { siteToText } from "../util/site";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    margin: 8
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 12,
    fontSize: 16,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

function handlePress(name, {title, text}) {
  Actions.siteTextDetail({name, title, text});
}

export default class SiteText extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      dataSource: null
    };

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a.name !== b.name
    });

    this.setState({
      dataSource: dataSource.cloneWithRows(siteToText(this.props))
    });
  }

  renderRow(textRow) {
    return (
      <TouchableHighlight
        key={ textRow.name }
        onPress={ () => handlePress(this.props.name, textRow) }
      >
        <View style={ styles.rowContainer }>
          <Text style={ styles.rowText }>{ textRow.title }</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderSeperator(sectionId, rowId) {
    return <View key={rowId} style={styles.separator} />;
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.detailContainer }>
          { this.props.subDetail }
        </Text>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderRow }
          renderSeparator={ this.renderSeperator }
        />
      </View>
    );
  }
}
