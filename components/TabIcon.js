import React, { Component } from "react";
import { Text } from 'react-native';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default TabIcon;
