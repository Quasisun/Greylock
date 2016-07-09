/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */


import React, { PropTypes, Component } from 'react';
import s from './Row.css';
import Sidebar from '../Sidebar';

import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Row extends Component {

  render = () => {

    return (
      <div >
        {this.props.text}
      </div>)
  }

}

export default withStyles(s)(Row);
