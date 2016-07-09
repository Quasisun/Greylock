
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Box.css';
import Map from '../Map';
import Sidebar from '../Sidebar';

function Box() {

  return (<div className={s.box}> <Map /> <Sidebar /> </div>);
}

export default withStyles(s)(Box);
