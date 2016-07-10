/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */


import React, { PropTypes, Component } from 'react';
import s from './Map.css';
import Sidebar from '../Sidebar';

import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Map extends Component {

  APIKEY = 'pk.eyJ1IjoibGVtdXJiIiwiYSI6ImNpcWZnODBzdDAza3Fmb25leThsM3k0a2gifQ.GgYnPPAWnlHQgdp79iNp3A';
  map = null;
  polyline = null;
  nonce = 1;
  GTFO = [];

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var me = this;
    console.log("TRYING")
    var script = document.createElement("script");
    script.src = 'https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js';
    script.onload = () => {
      // apparently we need a freaking closure for this to work.
      L.mapbox.accessToken = me.APIKEY;
      if (me.map === null)  me.map = L.mapbox.map('map', 'mapbox.streets').setView([37.3938135, -122.0789624], 15); // Centered on Stanford Oval with appropriate zoom


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

  path() {
    var me = this;
    var line_points = me.props.paths
    

    for (var y = 0;y<Math.min(line_points.length, me.nonce)-1;y++) {
      for (var x = 0;x<line_points[y].length;x++) {
        L.polyline(line_points[y][x], {opacity: 1.0, color: '#7f8c8d'}).addTo(me.map);
      }
    }


      me.map.removeLayer(me.GTFO)

    if (me.nonce >= line_points.length) {
      me.GTFO = []

      for (var x = 0;x<line_points[line_points.length-1].length;x++) {
        me.GTFO = me.GTFO.concat(line_points[line_points.length-1][x])
        console.log(me.GTFO)
        L.polyline(me.GTFO, {opacity: 1.0, color: '#e74c3c'}).addTo(me.map);
      }
    }
  }

  layers() {
    var me = this;


    if (me.props.paths.length === 0 || me.props.points.length === 0 ) return;
    var line_points = me.props.paths

    // http://leafletjs.com/reference.html#polyline
    var polyline_options = {
        color: '#32cd32'

    }
    var myLayer = L.mapbox.featureLayer().addTo(me.map);
    var homeList = me.props.points.map(function(coordinates) {
      return coordinates.reverse();
    });
      var mapFeatures = []
      for (var i = homeList.length - 1; i > 0; i--) {
        mapFeatures.push({
          "type": "Feature",
          "properties": {
            "marker-color": "34495e",
            "icon": "harbor",
          },
          "geometry": {
              "type": "Point",
              "coordinates": homeList[i],
          }
        });
      };
      mapFeatures.push({
        "type": "Feature",
        "properties": {
          "marker-color": "#e74c3c",
          "title": "DESTINATION"
        },
        "geometry": {
            "type": "Point",
            "coordinates": homeList[0],
        }
      });
      myLayer.setGeoJSON(mapFeatures);

      console.log(homeList)
      console.log(line_points)

   
    me.nonce = 1;
    setInterval(() => {
      me.nonce++;
      me.path();
    }, 1000)

  //me.map.setView(line_points[0][0], 11);
    var Cx = 0.0;
    var Cy = 0.0;

    homeList.map(function(coordinates) {
      Cx += coordinates[0]
      Cy += coordinates[1]
    })

    Cx /= homeList.length
    Cy /= homeList.length

    console.log(Cx)
    console.log(Cy)

    var results = [Cy, Cx];
    console.log(results)
    console.log(line_points[0][0])

    me.map.setView(results, 13);
    console.log("ADDED")
  }

  render = () => {

    var me = this;

    if (this.map !== null) this.layers();

    return (
        <div className={s.MapWrap}>
        <div id="map" className={s.Map}></div>
        <span id="bestDistance"
      style={{ float: 'right',
               position: 'absolute',
               right: '100px',
               bottom: '0px',
               backgroundColor: '#666',
               color: '#fff',
               fontSize: '12px',
               fontFamily: 'Helvetica',
               padding: '20px',
               textAlign: 'Center',
             }}><span style={{
               textTransform: 'uppercase',
               fontWeight: 'bold',
               letterSpacing: '1px',
             }}>Transyt</span> <br /> { this.props.bestDistance || "?" } mi</span>
        <span id="naiveDistance"
      style={{ float: 'right',
               position: 'absolute',
               right: '0px',
               bottom: '0px',
               backgroundColor: '#666',
               color: '#fff',
               fontSize: '12px',
               fontFamily: 'Helvetica',
               padding: '20px',
               textAlign: 'center',
             }}><span style={{
               textTransform: 'uppercase',
               fontWeight: 'bold',
               letterSpacing: '1px',
             }}>Naive</span> <br /> { this.props.naiveDistance || "?" } mi</span>

        </div>)
  }

}

export default withStyles(s)(Map);
