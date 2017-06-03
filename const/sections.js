import React from 'react';

import Sites from "../components/Sites";

const HOME = "HOME";
const MAP = "MAP";
const SITES = "SITES";
const TOUR = "TOUR";
const MORE = "ABOUT";

const ORDER = [HOME, MAP, SITES, TOUR, MORE];

const NAMES_MAP = {
  [HOME]: "Home",
  [MAP]: "Map",
  [SITES]: "Sites",
  [TOUR]: "Tour",
  [MORE]: "More"
};

const VIEWS = {
  [HOME]: "Home",
  [MAP]: "Map",
  [SITES]: <Sites />,
  [TOUR]: "Tour",
  [MORE]: "More"
};

export {
  HOME, MAP, SITES, TOUR, MORE, ORDER, NAMES_MAP, VIEWS
};
