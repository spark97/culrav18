"use strict"; // Start of use strict

// 7. google map
function gMap () {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
        	// getting options from html
        	var Self = $(this); 
        	var mapName = Self.attr('id');
        	var mapLat = Self.data('map-lat');
        	var mapLng = Self.data('map-lng');
        	var iconPath = Self.data('icon-path');
        	var mapZoom = 15;
        	var mapTitle = Self.data('map-title');
        	var markers = Self.data('markers');

        	// defined default style
        	var styles = [
        	{
        		"elementType": "geometry",
        		"stylers": [
        		{
        			"color": "#242f3e"
        		}
        		]
        	},
        	{
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#746855"
        		}
        		]
        	},
        	{
        		"elementType": "labels.text.stroke",
        		"stylers": [
        		{
        			"color": "#242f3e"
        		}
        		]
        	},
        	{
        		"featureType": "administrative.locality",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#d59563"
        		}
        		]
        	},
        	{
        		"featureType": "poi",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#d59563"
        		}
        		]
        	},
        	{
        		"featureType": "poi.park",
        		"elementType": "geometry",
        		"stylers": [
        		{
        			"color": "#263c3f"
        		}
        		]
        	},
        	{
        		"featureType": "poi.park",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#6b9a76"
        		}
        		]
        	},
        	{
        		"featureType": "road",
        		"elementType": "geometry",
        		"stylers": [
        		{
        			"color": "#38414e"
        		}
        		]
        	},
        	{
        		"featureType": "road",
        		"elementType": "geometry.stroke",
        		"stylers": [
        		{
        			"color": "#212a37"
        		}
        		]
        	},
        	{
        		"featureType": "road",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#9ca5b3"
        		}
        		]
        	},
        	{
        		"featureType": "road.highway",
        		"elementType": "geometry",
        		"stylers": [
        		{
        			"color": "#746855"
        		}
        		]
        	},
        	{
        		"featureType": "road.highway",
        		"elementType": "geometry.stroke",
        		"stylers": [
        		{
        			"color": "#1f2835"
        		}
        		]
        	},
        	{
        		"featureType": "road.highway",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#f3d19c"
        		}
        		]
        	},
        	{
        		"featureType": "transit",
        		"elementType": "geometry",
        		"stylers": [
        		{
        			"color": "#2f3948"
        		}
        		]
        	},
        	{
        		"featureType": "transit.station",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#d59563"
        		}
        		]
        	},
        	{
        		"featureType": "water",
        		"elementType": "geometry",
        		"stylers": [
        		{
        			"color": "#17263c"
        		}
        		]
        	},
        	{
        		"featureType": "water",
        		"elementType": "labels.text.fill",
        		"stylers": [
        		{
        			"color": "#515c6d"
        		}
        		]
        	},
        	{
        		"featureType": "water",
        		"elementType": "labels.text.stroke",
        		"stylers": [
        		{
        			"color": "#17263c"
        		}
        		]
        	}
        	]

        	// if zoom not defined the zoom value will be 15;

        	// init map
        	var map;
        	map = new GMaps({
        		div: '#'+mapName,
        		scrollwheel: false,
        		lat: mapLat,
        		lng: mapLng,
        		styles: styles,
        		zoom: mapZoom
        	});
            // if icon path setted then show marker
            console.log(iconPath);
            if(true) {
            	$.each(markers, function (index, value) {
            		var index = value;
            		var html;
            		if (index[2]) {
            			html = index[2];
            		};                    
            		if (!index[3]) {
            			index[3] = iconPath;
            		};

            		map.addMarker({
            			icon: index[3],                        
            			lat: index[0],
            			lng: index[1],
            			infoWindow: {
            				content: html
            			}
            		});   

            	});
            }
        });  
};
}



// Instance of fuction while Document ready event	
jQuery(document).ready(function () {
	(function ($) {
		gMap();


	})(jQuery);
});





