import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
});

const SitePhotoDetail = ({fullUrl}) =>
  <View style={ styles.container }>
    <Image source={fullUrl} />
  </View>;

export default SitePhotoDetail;
