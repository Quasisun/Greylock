import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './List.css';
import Map from '../Map';
import Sidebar from '../Sidebar';
import Row from '../Row';

import {
  Form,
  Input,
  Button,
  Navbar,
  FormGroup,
  FormControl
} from 'react-bootstrap'

class List extends Component {

  render = () => {
    var list = this.props.list.map(function(text) {
        return (<Row text={text}/>)
    })

    return (<div>
      {list}
      </div>)
  }
}

export default withStyles(s)(List);
