
import sites from "./sites.json";
import { siteToPhotos, siteVideos } from "../util/site";

const sitesData = sites.reduce((coll, site, i) => {
  const updated = Object.assign({}, site, {
    photos: siteToPhotos(site),
    index: i
  });

  coll.push(siteVideos(updated));
  return coll;
}, []);

export default sitesData;
