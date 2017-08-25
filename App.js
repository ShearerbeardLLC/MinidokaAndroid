import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";

import Home from "./components/Home";
import Tour from "./components/Tour";
import Map from "./components/Map";
import Sites from "./components/Sites";
import Site from "./components/Site";
import SiteTextDetail from "./components/SiteTextDetail";
import SitePhotoDetail from "./components/SitePhotoDetail";
import More from "./components/More";
import MoreDetail from "./components/MoreDetail";

import TabIcon from "./components/TabIcon";

import { FOM_YELLOW, FOM_ORANGE } from './styles/colors';

export default class App extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={{ tintColor: 'white' }}
        navigationBarStyle={{backgroundColor: FOM_ORANGE, borderBottomColor:"#1e2226"}}
        titleStyle={{color : "#FFF"}}>
        <Scene key="root">
          <Scene key="tabbar" tabs={ true } tabBarStyle={{backgroundColor: "black"}}>
            <Scene key="homeTab" title="Home"  icon={ TabIcon }>
              <Scene key="home" title="Home" component={ Home } />
            </Scene>
            <Scene key="mapTab" title="Map" icon={ TabIcon }>
              <Scene key="map" title="Map" component={ Map } initial={ true } />
            </Scene>
            <Scene key="sitesTab" title="Sites" icon={ TabIcon }>
              <Scene key="sites" title="Sites" component={ Sites } initial={ true } />
            </Scene>
            <Scene key="tourTab" title="Tour" icon={ TabIcon }>
              <Scene key="tour" title="Tour" component={ Tour } initial={true} />
            </Scene>
            <Scene key="moreTab" title="More" icon={ TabIcon }>
              <Scene key="more" title="More" component={ More } initial={ true } />
            </Scene>
          </Scene>
          <Scene
            clone={true}
            key="site"
            getTitle={({name}) => name}
            component={ Site } />
          <Scene
            key="siteTextDetail"
            modal={true}
            component={ SiteTextDetail }
          />
          <Scene
            key="sitePhotoDetail"
            modal={true}
            component={ SitePhotoDetail }
          />
          <Scene key="moreDetail" component={ MoreDetail } getTitle={({text}) => text} />
        </Scene>
      </Router>
    );
  }
}
