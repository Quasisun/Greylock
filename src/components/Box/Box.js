import React, { PropTypes, Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Box.css';
import Map from '../Map';
import Sidebar from '../Sidebar';

const Box = React.createClass({
  getInitialState: function() {
  	return {'paths': [], 'points': []};
  },

  callBack: function(data) {
    var me = this;
  	me.setState({'paths': data.paths, 'points': data.points, 'bestDistance': data.best_distance, 'naiveDistance': data.naive_distance });
  },

  render: function() {
    var me = this;
  	return (<div className={s.box}> <Map paths={this.state.paths} points={this.state.points} bestDistance = { this.state.bestDistance } naiveDistance = { this.state.naiveDistance } />
            <Sidebar callBack={this.callBack}
            style={{
              backgroundColor: "#2f2f2f",
            }}/> </div>);
  }
})

export default withStyles(s)(Box);
