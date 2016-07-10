import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './List.css';
import Map from '../Map';
import Sidebar from '../Sidebar';
import Row from '../Row';

import {
  ListGroup,
  ListGroupItem,
  Button,
  Navbar,
  FormGroup,
  FormControl
} from 'react-bootstrap'

class List extends Component {

  render = () => {

    var list = this.props.list.map(function(text) {
      console.log(text)
        return (<ListGroupItem> {text} </ListGroupItem>)
    })

    if (list.size == 0) return <div></div>

    return (
      <ListGroup>
          {list}
        </ListGroup>
        )
  }
}

export default withStyles(s)(List);
