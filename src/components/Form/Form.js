import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Form.css';
import Map from '../Map';
import List from '../List';
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

  handleSubmit: function(e) {
    const addresses = this.state.addresses
    if (this.state.currentAddress == "") return;
    addresses.push(this.state.currentAddress);
    this.setState({ 'addresses': addresses, currentAddress: ""});
    fetchRoutes();
  },

  render: function() {
    var me = this;
    return (
        <div>
          <Navbar>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
          <FormGroup style={{padding:20}}>
          <FormControl value={this.state.currentAddress} type="text" placeholder="Address" onChange={this.handleAddressChange}/>
        {' '}
          <Button onClick= { this.handleSubmit }
          style={{left: 5, marginLeft: '20px', fontSize: 18, color: 'grey', overflow:'hidden', borderRadius:5, backgroundColor: 'white'}}>
          +
        </Button>
        </FormGroup>
          </Navbar.Form>
          </Navbar.Collapse>
          </Navbar>

          <List list={me.state.addresses}/>
        </div>
    );
  }
})

/*
  onclick and callback
*/

export default withStyles(s)(FullForm);
