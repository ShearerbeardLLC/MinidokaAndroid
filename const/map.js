import sitesData from "./sites.json";

function regionContainingPoints(points) {
	var minX, maxX, minY, maxY;

	// init first point
	((point) => {
		minX = point.latitude;
		maxX = point.latitude;
		minY = point.longitude;
		maxY = point.longitude;
	})(points[0]);

	// calculate rect
	points.map((point) => {
		minX = Math.min(minX, point.latitude);
		maxX = Math.max(maxX, point.latitude);
		minY = Math.min(minY, point.longitude);
		maxY = Math.max(maxY, point.longitude);
	});

	var midX = (minX + maxX) / 2;
	var midY = (minY + maxY) / 2;
	var midPoint = [midX, midY];

	var deltaX = (maxX - minX);
	var deltaY = (maxY - minY);

	return {
		latitude: midX, longitude: midY,
		latitudeDelta: deltaX, longitudeDelta: deltaY * 1.5,
	};
}

const DEFAULT_LOCATION = regionContainingPoints(
	sitesData.map(({coordinates}) => coordinates[0])
);

export {
	DEFAULT_LOCATION
};
