import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import styles from "../styles/Container";

export default class Site extends Component {
  render() {
		const { name, subDetail, photos, text } = this.props;
    return (
      <View style={ styles.container }>
        <Text>Site: { name || "Uh Oh" }</Text>
				<Text>{ subDetail }</Text>
      </View>
    );
  }
}
