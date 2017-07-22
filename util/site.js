import photosLoader from "./photos";

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
  return text.map(({name, file}) => {

  });
}

export { siteToPhotos, siteToCoords };
