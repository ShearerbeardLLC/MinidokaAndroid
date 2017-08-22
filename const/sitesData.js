
import sites from "./sites.json";
import { siteToPhotos } from "../util/site";

export default sites.reduce((coll, site) => {
  const updated = Object.assign({}, site, {
    photos: siteToPhotos(site)
  });

  coll.push(updated);
  return coll;
}, []);
