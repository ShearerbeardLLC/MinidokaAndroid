const DEFAULT_CONFIG = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

function getLatLong(position) {
	return {
		latitude: position.coords.latitude,
		longitude: position.coords.longitude
	};
}

function getCurrent(success, error, overrideConfig = {}) {
	navigator.geolocation.getCurrentPosition(
		(position) => success(getLatLong(position)),
		error,
		Object.assign(DEFAULT_CONFIG, overrideConfig)
	);
}

function watch(success, error, overrideConfig = {}) {
	const watchId = navigator.geolocation.watchPosition(
		(position) => success(getLatLong(position)),
		error,
		Object.assign(DEFAULT_CONFIG, overrideConfig)
	);

	return watchId;
}

function unWatch(watchId) {
	navigator.geolocation.clearWatch(watchId);
}

export { getCurrent, watch, unWatch };
