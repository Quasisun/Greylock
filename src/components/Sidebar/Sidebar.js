
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import Form from '../Form';
import List from '../List';
import Row from '../Row';


class Sidebar extends Component {

  var list = ["sts", "stsss"]

  return (
    <div className={s.Sidebar}> <Form callBack={this.props.callBack}/> </div>
  );
}

export default withStyles(s)(Sidebar);
