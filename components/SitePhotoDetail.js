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
  },
  photo: {
    flex: 1
  }
});

const SitePhotoDetail = ({fullUrl}) =>
  <View style={ styles.container }>
    <Image style={ styles.photo } source={fullUrl} />
  </View>;

export default SitePhotoDetail;
