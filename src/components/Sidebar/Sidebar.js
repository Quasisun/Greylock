
import React, { PropTypes, Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import Form from '../Form';
import List from '../List';
import Row from '../Row';


class Sidebar extends Component {

  render = () => {
  return (

    <div className={s.Sidebar}> <Form name="Destination" /> <Form name="Pickups"/></div>
  );
}
}

export default withStyles(s)(Sidebar);
