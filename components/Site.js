import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  Image
} from "react-native";

import SitePhotos from './SitePhotos';
import SiteText from './SiteText';
import SiteBottomBar from './SiteBottomBar';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FOM_ORANGE } from '../styles/colors';
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 54,
      }
    }),
  },
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

export default class Site extends Component {

  render() {
		const { name, subDetail, photos, text, index, videos } = this.props;
    return (
      <View style={ styles.column } >
        <SitePhotos {...this.props} />
        <SiteText {...this.props} />
        <SiteBottomBar {...this.props} />
        <ActionButton
          buttonColor={ FOM_ORANGE }
          offsetX={ 18 }
          offsetY={ 18 }>
          <ActionButton.Item
            buttonColor={ FOM_ORANGE }
            textStyle={styles.text}
            textContainerStyle={styles.textContainer}
            title="Map"
            onPress={() => Actions.tour({index: index || 1, type: 'transitionToTop'})}
          >
            <Icon name="google-maps" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          { videos ?
            <ActionButton.Item
              buttonColor={ FOM_ORANGE }
              textStyle={styles.text}
              textContainerStyle={styles.textContainer}
              title="Interviews"
              onPress={() => Actions.video({name, videos})}
            >
              <Icon name="filmstrip" style={styles.actionButtonIcon} />
            </ActionButton.Item> : false
          }
        </ActionButton>
      </View>
    );
  }
}
