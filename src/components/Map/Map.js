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
      me.map = L.mapbox.map('map', 'mapbox.streets').setView([37.830348,-122.486052], 15); // Centered on Stanford Oval with appropriate zoom
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
      var mapFeatures = [{
            "type": "Feature",
            "properties": {
              "paint": {
                "line-color": "#888",
                "line-width": 8
              }
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                  [-122.0806652, 37.3968608],
                  [-122.0810575, 37.3990172],
                  [-122.08075, 37.3997053],
                  [-122.0811992, 37.3991828],
                  [-122.0826198, 37.3980308],
                  [-122.0812296, 37.396888],
                  [-122.0820107, 37.3974054],
                  [-122.0815439, 37.3981199],
                  [-122.0849279, 37.3930955],
                  [-122.0838981, 37.3925784],
                  [-122.0846405, 37.3913576],
                  [-122.0855468, 37.3917248],
                  [-122.0848103, 37.3929315],
                  [-122.0883314, 37.39434],
                  [-122.0999704, 37.3989955],
                  [-122.092542, 37.4115397],
                  [-122.0978427, 37.412102],
                  [-122.097773, 37.4122074],
                  [-122.0836338, 37.4088115],
                  [-122.0755112, 37.4084712],
                  [-122.0762527, 37.40532400000001],
                  [-122.077342, 37.4059761],
                  [-122.077342, 37.4059761],
                  [-122.0781004, 37.4063543],
                  [-122.0731049, 37.4003961],
                ],
                "color": "#FF0000",
                "width": 15
            }
          }];
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

      me.setState({
        myLayer: myLayer
      });


      /*var myLayer = L.mapbox.featureLayer().addTo(me.map);
      var geojson = me.getMapProperties();
      myLayer.on('layeradd', function(e) {
        var marker = e.layer,
        feature = marker.feature;
      });
      myLayer.setGeoJSON(geojson);
      me.setState({
        geojson: geojson,
        myLayer: myLayer
      });*/
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
