
import sites from "./sites.json";
import sitesJP from "./sites_JP.json"
import sitesSP from "./sites_SP.json";
import locale from 'react-native-locale-detector';

import { siteToPhotos, siteVideos } from "../util/site";

let sitesForLocal;

switch(locale) {
  case 'ja_JP':
    sitesForLocal = sitesJP;
    break;
  case 'es_MX':
    sitesForLocal = sitesSP;
    break;
  default:
    sitesForLocal = sites;
}

const sitesData = sitesForLocal.reduce((coll, site, i) => {
  const updated = Object.assign({}, site, {
    photos: siteToPhotos(site),
    index: i
  });

  coll.push(siteVideos(updated));
  return coll;
}, []);

export default sitesData;
