
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
  const handleAddressChange = () => {
    console.log("Adding address");
  }

  const handleSubmit = () => {
    console.log("Handle submit address");
  }

  return (<Navbar>

    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Address" onChange={ handleAddressChange } />
        </FormGroup>
        {' '}
          <Button type="submit" onClick={ handleSubmit }>+</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>)
}

/*
  onclick and callback
*/

export default withStyles(s)(FullForm);
