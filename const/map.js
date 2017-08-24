
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const DEFAULT_LOCATION = {
	latitude: 42.6777,
	longitude: -114.25,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA
};

export {
	DEFAULT_LOCATION
};
