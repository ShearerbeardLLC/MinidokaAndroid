import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import styles from "../styles/Container";

export default class Site extends Component {
  render() {
		const { name, detail, subDetail } = this.props;
    return (
      <View style={ styles.container }>
        <Text>Site: { name || "Uh Oh" }</Text>
				<Text>{ detail }</Text>
				<Text>{ subDetail }</Text>
      </View>
    );
  }
}
