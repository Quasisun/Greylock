/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */


import React, { PropTypes, Component } from 'react';
import s from './Map.css';
import Sidebar from '../Sidebar';

import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Map extends Component {

  APIKEY = 'pk.eyJ1IjoibGVtdXJiIiwiYSI6ImNpcWZnODBzdDAza3Fmb25leThsM3k0a2gifQ.GgYnPPAWnlHQgdp79iNp3A';
  map = null;

  /*constructor(props) {
    super(props);
    this.state = {
      geojson: {},
      myLayer: {}
    };
  }

  makeNewMarker = (name) => {
    var map = this.map;
    map.locate();

    map.on('locationfound', (e) => {
      // map.fitBounds(e.bounds);
      var geojson = this.state.geojson;
      geojson.features = geojson.features.concat(
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [e.latlng.lng, e.latlng.lat]
          },
          properties: {
            "name": name,
            "image": "http://i65.tinypic.com/o89me0.jpg",
            "contact": "Text me at (408) 274-3168",
            'marker-size': 'large',
            'marker-color': '#00FF00',
            'marker-symbol': 'building'
          }
        }
      );
      var myLayer = this.state.myLayer;
      if (myLayer) {
        myLayer.setGeoJSON(geojson);
      }
      this.setState({
        geojson: geojson,
        myLayer: myLayer
      });
      myLayer.addTo(this.map);
    });
  };

  getMapProperties = () => {
    return ({
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            -122.18, 37.43 // COORDINATES ARE REVERSED HERE BECAUSE TROLLLOLOL
          ]
        },
        properties: {
          "name": 'Help fix a bike?',
          "image": "http://i65.tinypic.com/2chn69d.jpg",
          "contact": "Send <a target=\"_blank\" href=\"https://www.facebook.com/vytralala?fref=ts\"> Vy </a>a facebook message!",
          'marker-size': 'large',
          'marker-color': '#FF0000',
          'marker-symbol': 'building'
        }
      },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              -122.17, 37.42
            ]
          },
          properties: {
            "name": 'Help me loft up my bed!',
            "image": "http://i66.tinypic.com/s4quf5.jpg",
            "contact": "Text Matthew at (555) 555-5555",
            'marker-size': 'large',
            'marker-color': '#0000FF',
            'marker-symbol': 'building'
          }
        }]
    });
  };

  tooltip = (feature) => {
    return ('<div class="tooltip">' +
      '<img class="image" src="' + feature.properties.image + '" />' +
      '<div class="text">' +
        '<div class="name">' + feature.properties.name + '</div>' +
        '<div class="contact">' + feature.properties.contact + '</div>' +
      '</div>' +
    '</div>');
  };

  componentDidMount() {

    var me = this;
    var script = document.createElement("script");
    script.src = 'https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js';
    script.onload = () => {
      // apparently we need a freaking closure for this to work.
      L.mapbox.accessToken = me.APIKEY;
      me.map = L.mapbox.map('map', me.MAPKEY).setView([37.43, -122.17], 15); // Centered on Stanford Oval with appropriate zoom.

      var myLayer = L.mapbox.featureLayer().addTo(me.map);
      var geojson = me.getMapProperties();
      myLayer.on('layeradd', function(e) {
        var marker = e.layer,
        feature = marker.feature;

        // Create custom popup content
        var popupContent = me.tooltip(feature);
        // http://leafletjs.com/reference.html#popup
        marker.bindPopup(popupContent, {
          closeButton: false,
          minWidth: 320
        });
      });
      myLayer.setGeoJSON(geojson);
      me.setState({
        geojson: geojson,
        myLayer: myLayer
      });
    };

    var link = document.createElement("link");
    link.href = 'https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css';
    link.rel = 'stylesheet';
    link.type="text/css";


    document.body.appendChild(script);
    document.body.appendChild(link);
    // var script = document.createElement("script");
    // script.src = "L.mapbox.accessToken = 'pk.eyJ1IjoiaHVnaGJ6aGFuZyIsImEiOiJjaWtrbXYyNjkwY29rdmtrbWhxb3BudGduIn0.sM9UAirU-Bzzcaw0uo3ONw'; " +
    // "L.mapbox.map('map', 'mapbox.streets').setView([40, -74.50], 9);";
    // document.body.appendChild(script);
  }*/

  // getMapProperties = () => {
  //   return ({
  //     type: 'FeatureCollection',
  //     features: [{
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [
  //           -122.18, 37.43 // COORDINATES ARE REVERSED HERE BECAUSE TROLLLOLOL
  //         ]
  //       },
  //       properties: {
  //         "name": 'Help fix a bike?',
  //         "image": "http://i65.tinypic.com/2chn69d.jpg",
  //         "contact": "Send <a target=\"_blank\" href=\"https://www.facebook.com/vytralala?fref=ts\"> Vy </a>a facebook message!",
  //         'marker-size': 'large',
  //         'marker-color': '#FF0000',
  //         'marker-symbol': 'building'
  //       }
  //     },
  //       {
  //         type: 'Feature',
  //         geometry: {
  //           type: 'Point',
  //           coordinates: [
  //             -122.17, 37.42
  //           ]
  //         },
  //         properties: {
  //           "name": 'Help me loft up my bed!',
  //           "image": "http://i66.tinypic.com/s4quf5.jpg",
  //           "contact": "Text Matthew at (555) 555-5555",
  //           'marker-size': 'large',
  //           'marker-color': '#0000FF',
  //           'marker-symbol': 'building'
  //         }
  //       }]
  //   });
  // };


  componentDidMount() {

    var me = this;
    var script = document.createElement("script");
    script.src = 'https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js';
    script.onload = () => {
      // apparently we need a freaking closure for this to work.
      L.mapbox.accessToken = me.APIKEY;
      me.map = L.mapbox.map('map', 'mapbox.streets').setView([37.3980308, -122.0826198], 13); // Centered on Stanford Oval with appropriate zoom

      var line_points = [
        [37.3938135, -122.0789624],
        [37.39337829999999, -122.0778606],
        [37.394305, -122.0772614],
        [37.3946652, -122.0781451],
        [37.3953742, -122.0778545],
        [37.3974054, -122.0820107],
        [37.3981199, -122.0815439],
        [37.3955569, -122.0833889],
        [37.39790199999999, -122.0814619],
        [37.3997427, -122.0809042],
        [37.3991828, -122.0811992],
        [37.3980308, -122.0826198],
        [37.4027802, -122.0957311],
        [37.4115397, -122.092542],
        [37.4122074, -122.097773],
        [37.4128391, -122.0975919],
        [37.4122074, -122.097773],
        [37.4063543, -122.0781004],
        [37.4060974, -122.0781059],
        [37.4058314, -122.0781081],
        [37.4003961, -122.0731049],
      ];

    // http://leafletjs.com/reference.html#polyline
    var polyline_options = {
        color: '#000'
    }
    var myLayer = L.mapbox.featureLayer().addTo(me.map);
    var homeList = [
      [-122.09051, 37.391905],
      [-122.083883, 37.392429],
      [-122.081737, 37.400337],
      [-122.079573, 37.392624],
      [-122.076458, 37.396269],
      [-122.077245, 37.406044],
      [-122.075254, 37.402992],
      [-122.095741, 37.412791],
      [-122.104818, 37.415972],
    ];
      var mapFeatures = []
      for (var i = homeList.length - 1; i >= 0; i--) {
        mapFeatures.push({
          "type": "Feature",
          "properties": {
            "title": "WATERMELON",
            "icon": "harbor",
          },
          "geometry": {
              "type": "Point",
              "coordinates": homeList[i],
          }
        });
      };
      myLayer.setGeoJSON(mapFeatures);

    var polyline = L.polyline(line_points, polyline_options).addTo(me.map);
  };


    var link = document.createElement("link");
    link.href = 'https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css';
    link.rel = 'stylesheet';
    link.type="text/css";


    document.body.appendChild(script);
    document.body.appendChild(link);
    // var script = document.createElement("script");
    // script.src = "L.mapbox.accessToken = 'pk.eyJ1IjoiaHVnaGJ6aGFuZyIsImEiOiJjaWtrbXYyNjkwY29rdmtrbWhxb3BudGduIn0.sM9UAirU-Bzzcaw0uo3ONw'; " +
    // "L.mapbox.map('map', 'mapbox.streets').setView([40, -74.50], 9);";
    // document.body.appendChild(script);
  }

  render = () => {

    return (<div className={s.MapWrap}>
      <div
      id="map"
      className={s.Map}>
    </div> </div>)
  }

}

export default withStyles(s)(Map);
