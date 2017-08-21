import photosLoader from "./photos";
import textLoader from "./text";

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

function siteToText({text}) {
  return text.map(({name, file}) => Object.assign({}, {
    title: name,
    text: textLoader[file]
  }));
}

function sitesToDefaultPhotos(sites) {
  return sites.map(({ prefix, name }) => ({
    prefix,
    name,
    url: photosLoader[`${prefix}-1-preview`]
  }));
}

export { siteToPhotos, siteToCoords, siteToText, sitesToDefaultPhotos };
