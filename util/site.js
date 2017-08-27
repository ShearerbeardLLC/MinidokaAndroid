import photosLoader from "./photos";
import textLoader from "./text";
import fullUrl from "../util/video";

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
  text: textLoader[file]
});

const siteVideos = site => {
  if (!site.video) {
    return site;
  }

  const videos = site.video.map((video, i) => Object.assign({}, video, {
    key: `${site.prefix}-${ i + 1}`,
    uri: fullUrl(site.prefix, i)
  }));

  return Object.assign({}, site, {
    videos
  });
};

export { siteToPhotos, siteToCoords, siteTextDetails, siteVideos };
