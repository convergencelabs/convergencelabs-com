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


    var image = '/assets/images/map-pin.png';

    // Sioux Falls Marker
    var siouxFalls = new google.maps.LatLng(43.5446, -96.7311);
    new google.maps.Marker({
      position: siouxFalls,
      map: map,
      icon: image
    });

    // Salt Lake Ciy Falls Marker
    var saltLake = new google.maps.LatLng(40.7608, -111.8910);
    new google.maps.Marker({
      position: saltLake,
      map: map,
      icon: image
    });

    // San Diego
    var sanDiego = new google.maps.LatLng(32.7157, -117.1611);
    new google.maps.Marker({
      position: sanDiego,
      map: map,
      icon: image
    });

    var top = 49.3457868 ;// north lat
    var left = -124.7844079; //  west long
    var right = -66.9513812; // east long
    var bottom =  24.7433195; // south lat

    var bounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(top, left));
    bounds.extend(new google.maps.LatLng(top, right));
    bounds.extend(new google.maps.LatLng(bottom, left));
    bounds.extend(new google.maps.LatLng(bottom, right));
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  } // initGMap

  google.maps.event.addDomListener(window, 'load', initGMap);

});