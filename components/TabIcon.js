import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

import navHome from '../image/nav-home.png';
import navHomeSelected from '../image/nav-home-selected.png';

import navMaps from '../image/nav-maps.png';
import navMapsSelected from '../image/nav-maps-selected.png';

import navSites from '../image/nav-sites.png';
import navSitesSelected from '../image/nav-sites-selected.png';

import navTour from '../image/nav-tour.png';
import navTourSelected from '../image/nav-tour-selected.png';

import navMore from '../image/nav-about.png';
import navMoreSelected from '../image/nav-about-selected.png';

import { FOM_YELLOW } from '../styles/colors';

const iconMap = {
  'Home': [navHome, navHomeSelected],
  'Map': [navMaps, navMapsSelected],
  'Sites': [navSites, navSitesSelected],
  'Tour': [navMaps, navMapsSelected],
  'More': [navMore, navMoreSelected]
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

const getIcon = (isSelected, title) => {
  const [normal, selected] = iconMap[title];

  return isSelected ? selected : normal;
};

const TabIcon = ({ selected, title }) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.imageContainer }>
        <Image source={ getIcon(selected, title) } />
      </View>
      <Text style={{color: selected ? FOM_YELLOW : 'white'}}>{title}</Text>
    </View>
  );
}

export default TabIcon;
