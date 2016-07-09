
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Form.css';
import Map from '../Map';
import Sidebar from '../Sidebar';

import {
  Form,
  Input,
  Button,
  Navbar,
  FormGroup,
  FormControl
} from 'react-bootstrap'

function FullForm() {

  return (<Navbar>
    
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Address" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>)
}

/*
  onclick and callback
*/

export default withStyles(s)(FullForm);
