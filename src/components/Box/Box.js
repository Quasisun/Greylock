import React, { PropTypes, Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Box.css';
import Map from '../Map';
import Sidebar from '../Sidebar';

const Box = React.createClass({
  getInitialState: function() {
  	return {'path': [], 'points': []};
  },

  callBack: function(path, points) {
  	this.setState({'path': path, 'points': points});
  },

  render: function() {
    var me = this;
    console.log(me)
  	return (<div className={s.box}> <Map path={this.state.path} points={this.state.points}/> <Sidebar callBack={this.callBack}/> </div>);
  }
})

export default withStyles(s)(Box);
