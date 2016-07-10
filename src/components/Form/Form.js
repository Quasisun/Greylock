
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Form.css';
import Map from '../Map';
import Sidebar from '../Sidebar';

import {
  Form,
  Input,
  Navbar,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

function FullForm() {

  return (<Navbar>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup style={{padding:20}}>
          <FormControl type="text" placeholder="Address" />

        {' '}
          <Button 
          style={{left: 5, marginLeft: '20px', fontSize: 18, color: 'grey', overflow:'hidden', borderRadius:5, backgroundColor: 'white'}}>
          +
        </Button>
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>)

}


/*
  onclick and callback
*/

export default withStyles(s)(FullForm);
