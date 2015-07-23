
define(['leaflet'],
	function(L) {
		L.Control.Coordinates = L.Control.extend({
			options: {
				position: 'bottomleft'
			},

			onAdd: function (map) {
				this._divCoordinates = L.DomUtil.create('div', 'leaftet-coordinates');

				this._map = map;
				this._map.on('mousemove', this._updateCoordinates, this);

				return this._divCoordinates;
			},

			_updateCoordinates: function (e) {
				this._divCoordinates.innerHTML = e.latlng.lat.toPrecision(5) + " " 
				+ e.latlng.lng.toPrecision(5) + " Degrees";
			}
		});

		L.Map.mergeOptions({
			coordinatesControl: false
		});

		L.Map.addInitHook(function () {
			if (this.options.coordinatesControl) {
				this.coordinatesControl = new L.Control.Coordinates();
				this.addControl(this.coordinatesControl);
			}
		});

		L.control.coordinates = function (options) {
			return new L.Control.Coordinates(options);
		};
	}
);
