import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Form.css';
import Map from '../Map';
import List from '../List';
import Sidebar from '../Sidebar';
import { fetchRoutes } from '../fetchRoutes';

import {
  Form,
  Input,
  Button,
  Navbar,
  FormGroup,
  FormControl
} from 'react-bootstrap'

export const DestinationForm = React.createClass({
  getInitialState: function() {
    return { 'addresses': [], 'currentAddress': "" };
  },

  handleAddressChange: function(e) {
    this.setState({ 'currentAddress': e.target.value });
  },

  handleSubmit: function(e) {
    let addresses = this.state.addresses
    if (this.state.currentAddress == "") return;
    addresses = [this.state.currentAddress];
    this.setState({ 'addresses': addresses, currentAddress: ""});
    this.props.onSet(this.state.currentAddress);
  },

  render: function() {
    var me = this;
    return (
        <div>
          <Navbar>
            <Navbar.Collapse style={{padding:0}}>
              <Navbar.Form pullLeft style={{padding:0}}>
          <FormGroup>
          <div style={{fontSize:'35px'}}>Destination</div>
          <FormControl value={this.state.currentAddress} type="text" placeholder="Address" onChange={this.handleAddressChange} style={{width: '200px'}}/>
        {' '}
          <Button onClick= { this.handleSubmit }
          style={{left: 5, marginLeft: '10px', fontSize: 15, color: 'grey', overflow:'hidden', borderRadius:5, backgroundColor: 'white'}}>
          +
        </Button>
        </FormGroup>

        <List list={me.state.addresses}/>

          </Navbar.Form>
          </Navbar.Collapse>
          </Navbar>

        </div>
    );
  }
});

export const PickupsForm = React.createClass({
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
    this.props.onSet(addresses);
  },

  render: function() {
    var me = this;
    return (
        <div>
          <Navbar>
            <Navbar.Collapse style={{padding:0}}>
              <Navbar.Form pullLeft style={{padding:0}}>
          <FormGroup>
          <div style={{fontSize:'35px'}}>Pickups</div>
          <FormControl value={this.state.currentAddress} type="text" placeholder="Address" onChange={this.handleAddressChange} style={{width: '200px'}}/>
        {' '}
          <Button onClick= { this.handleSubmit }
          style={{left: 5, marginLeft: '10px', fontSize: 15, color: 'grey', overflow:'hidden', borderRadius:5, backgroundColor: 'white'}}>
          +
        </Button>
        </FormGroup>

        <List list={me.state.addresses}/>

          </Navbar.Form>
          </Navbar.Collapse>
          </Navbar>

        </div>
    );
  }
})

/*
  onclick and callback
*/
