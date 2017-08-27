import React, { Component } from "react";

import {
  StyleSheet,
} from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FOM_ORANGE } from '../styles/colors';
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  actionButtonIcon: {
		fontSize: 20,
		height: 22,
    color: 'white',
	},
  text: {
    color: 'white',
    backgroundColor: 'black'
  },
  textContainer: {
    backgroundColor: 'black'
  }
});

const handleMaps = index => setTimeout(() => Actions.tour({index, type: 'transitionToTop'}));
const handleInterviews = site => setTimeout(() => Actions.video(site));

const SiteButton = site => (
  <ActionButton
    buttonColor={ FOM_ORANGE }
    offsetX={ 18 }
    offsetY={ 18 }>
    <ActionButton.Item
      buttonColor={ FOM_ORANGE }
      textStyle={styles.text}
      textContainerStyle={styles.textContainer}
      title="Map"
      onPress={() => handleMaps(site.index || 1)}
    >
      <Icon name="google-maps" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    { site.videos ?
      <ActionButton.Item
        buttonColor={ FOM_ORANGE }
        textStyle={styles.text}
        textContainerStyle={styles.textContainer}
        title="Interviews"
        onPress={() => handleInterviews(site)}
      >
        <Icon name="filmstrip" style={styles.actionButtonIcon} />
      </ActionButton.Item> : false
    }
  </ActionButton>
);

export default SiteButton;
