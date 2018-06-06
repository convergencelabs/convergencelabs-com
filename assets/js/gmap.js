/* --------------------------------------------------
	Google Maps Settings
-------------------------------------------------- */

$(document).ready(function () {


  function initGMap() {
    'use strict';

    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 16,
      scrollwheel: false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(41.149183, -104.789659), // Cheyenne, WY

      // Styling of the map in JSON object
      styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#444444"}]
      }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{"saturation": -100}, {"lightness": 45}]
      }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{"visibility": "simplified"}]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{"color": "#cdd2d4"}, {"visibility": "on"}]
      }]
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    function createMarker(latLng) {
      new google.maps.Marker({
        position: latLng,
        map: map,
        icon: {
          url: '/assets/images/map-pin.png',
          // this is relative to the icon size of 51x57
          anchor: new google.maps.Point(26, 48) 
        }
      });
    }

    // Sioux Falls Marker
    var siouxFalls = new google.maps.LatLng(43.5446, -96.7311);
    createMarker(siouxFalls);

    // Salt Lake Ciy Falls Marker
    var saltLake = new google.maps.LatLng(40.7608, -111.8910);
    createMarker(saltLake);

    // San Diego
    var sanDiego = new google.maps.LatLng(32.7157, -117.1611);
    createMarker(sanDiego);

    map.setCenter(new google.maps.LatLng(38.809734, -98.555620));
    map.setZoom(4);
  } // initGMap

  google.maps.event.addDomListener(window, 'load', initGMap);

});