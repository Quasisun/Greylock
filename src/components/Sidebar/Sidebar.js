
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import Form from '../Form';


function Sidebar() {
  return (
    <div className={s.Sidebar}> <Form /> </div>
  );
}

export default withStyles(s)(Sidebar);
