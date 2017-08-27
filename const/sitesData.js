
import sites from "./sites.json";
import { siteToPhotos, siteVideos } from "../util/site";

const sitesData = sites.reduce((coll, site) => {
  const updated = Object.assign({}, site, {
    photos: siteToPhotos(site)
  });

  coll.push(siteVideos(updated));
  return coll;
}, []);

export default sitesData;
