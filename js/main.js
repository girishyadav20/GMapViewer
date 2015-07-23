//Add required dependencies
requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		plugins: '../plugins'
	}
});

requirejs(['leaflet', 'plugins/coordinates'],
function(L, coordinates) {
	var map = L.map("map", {
		coordinatesControl: true
	}).setView([34.05, -117.18], 12);
		
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
})
