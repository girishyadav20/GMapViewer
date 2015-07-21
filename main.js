var map = L.map("map").setView([34.05, -117.18], 12);
	
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&cpoy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);