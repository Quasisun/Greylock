
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

function Sidebar() {
  return (
    <div className={s.Sidebar}> HELLO</div>
  );
}

export default withStyles(s)(Sidebar);
