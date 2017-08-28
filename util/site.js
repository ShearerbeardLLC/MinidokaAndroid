import locale from 'react-native-locale-detector';
import photosLoader from "./photos";
import textLoader from "./text";
import fullUrl from "../util/video";

let filePrefix;

switch(locale) {
  case 'ja_JP':
    filePrefix = 'ja_';
    break;
  case 'es_MX':
    filePrefix = 'sp_';
    break;
  default:
    filePrefix = '';
}

function siteToCoords({coordinates}) {
	return coordinates[0];
}

function siteToPhotos({prefix, photos}) {
  return photos.map((photo, i) => {
    const num = i + 1;

    return Object.assign({}, photo, {
      previewUrl: photosLoader[`${prefix}-${ num }-preview`],
      fullUrl: photosLoader[`${prefix}-${ num }-full`]
    });
  });
}

const siteTextDetails = ({name, file}) => Object.assign({}, {
  title: name,
  text: textLoader[`${filePrefix}${file}`]
});

const siteVideos = site => {
  if (!site.videos) {
    return site;
  }

  const videosList = site.videos.map((video, i) => Object.assign({}, video, {
    key: `${site.prefix}-${ i + 1}`,
    uri: fullUrl(site.prefix, i)
  }));

  return Object.assign({}, site, {
    videosList
  });
};

export { siteToPhotos, siteToCoords, siteTextDetails, siteVideos };
