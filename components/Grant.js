import React from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        top: 72,
      },
      android: {
        top: 54,
      }
    }),
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16
  },
  text: {
    color: 'black',
    fontSize: 18,
  }
});

const Grant = () => (
  <View style={ styles.container }>
    <ScrollView>
      <Text style={ styles.text }>
      This project was funded, in part, by a grant from the U.S. Department of the Interior, National Park Service, Japanese American Confinement Sites Grant Program. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the U.S. Department of the Interior. 

This material received Federal financial assistance for the preservation and interpretation of U.S. confinement sites where Japanese Americans were detained during World War II. Under Title VI of the Civil Rights Act of 1964, Section 504 of the Rehabilitation Act of 1973, and the Age Discrimination Act of 1975, as amended, the U.S. Department of the Interior prohibits discrimination on the basis of race, color, national origin, disability or age in its federally funded assisted projects. If you believe you have been discriminated against in any program, activity, or facility as described above, or if you desire further information, please write to: 

Office of Equal Opportunity 
National Park Service 
1849 C Street, NW 
Washington, DC 20240
      </Text>
    </ScrollView>
  </View>
);

export default Grant;
