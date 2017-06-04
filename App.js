
import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";

import Home from "./components/Home";
import Tour from "./components/Tour";
import Map from "./components/Map";
import Sites from "./components/Sites";
import Site from "./components/Site";
import More from "./components/More";

import TabIcon from "./components/TabIcon";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" >
          <Scene key="tabbar" tabs={ true } tabBarStyle={{backgroundColor: "#FFFFFF"}}>
            <Scene key="homeTab" title="Home"  icon={ TabIcon }>
              <Scene key="home" title="Home" component={ Home } />
            </Scene>
            <Scene key="mapTab" title="Map" icon={ TabIcon }>
              <Scene key="map" title="Map" component={ Map } />
            </Scene>
            <Scene key="sitesTab" title="Sites" icon={ TabIcon }>
              <Scene key="sites" title="Sites" component={ Sites } initial={ true } />
              <Scene key="site" title="Site" component={ Site } />
            </Scene>
            <Scene key="tourTab" title="Tour" icon={ TabIcon }>
              <Scene key="tour" title="Tour" component={ Tour } />
            </Scene>
            <Scene key="moreTab" title="More" icon={ TabIcon }>
              <Scene key="more" title="More" component={ More } />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
