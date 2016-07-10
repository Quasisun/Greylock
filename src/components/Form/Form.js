
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

const FullForm = React.createClass({
  getInitialState: function() {
    return { 'addresses': [], 'currentAddress': "" };
  },

  handleAddressChange: function(e) {
    this.setState({ 'currentAddress': e.target.value });
  },

  handleSubmit: function() {
    const addresses = this.state.addresses
    addresses.push(this.state.currentAddress);
    this.setState({ 'addresses': addresses });
  },

  render: function() {
    return (
        <Navbar>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
        <FormControl type="text" placeholder="Address" onChange={ this.handleAddressChange } />
              </FormGroup>
            {' '}
        <Button type="submit" onClick={ this.handleSubmit }>+</Button>
        </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
    );
  }
})

/*
  onclick and callback
*/

export default withStyles(s)(FullForm);
