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
        <div style={{ backgroundColor: "#2f2f2f" }} >
        <Navbar style={{ backgroundColor: "#2f2f2f", borderColor: "#2f2f2f" }}>
            <Navbar.Collapse style={{padding:0}}>
              <Navbar.Form pullLeft style={{padding:0}}>
          <FormGroup>
        <div style={{fontSize:'20px',
                     color: '#999',
                     letterSpacing: '2px',
                     fontWeight: 'bold',
                     textTransform: 'uppercase',
                     paddingTop: '20px',
                     paddingBottom: '20px',
                    }}>Destination</div>
          <FormControl value={this.state.currentAddress} type="text" placeholder="Address" onChange={this.handleAddressChange} style={{width: '200px',
                                                  fontSize: '18px',
                                                  fontWeight: 'normal',
                                                  height: '50px'}}/>
        {' '}
          <Button onClick= { this.handleSubmit }
          style={{left: 5, marginLeft: '10px', fontSize: 15,
              color: 'grey', overflow:'hidden',
              borderRadius:5, backgroundColor: 'white',
              height: '50px',
              width: '75px',
              fontWeight: 'bold',
              fontSize: '20px',
              backgroundColor: '#3498db',
              color: '#fff',
              borderColor: '#3498db'}}>
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
          <Navbar style={{ backgroundColor: "#2f2f2f", borderColor: "#2f2f2f" }}>
            <Navbar.Collapse style={{padding:0}}>
              <Navbar.Form pullLeft style={{padding:0}}>
          <FormGroup>
        <div style={{fontSize:'20px',
                     color: '#999',
                     letterSpacing: '2px',
                     fontWeight: 'bold',
                     textTransform: 'uppercase',
                     paddingTop: '20px',
                     paddingBottom: '20px',
                    }}>Pickups</div>
        <FormControl value={this.state.currentAddress} type="text" placeholder="Address"
      onChange={this.handleAddressChange} style={{width: '200px',
                                                  fontSize: '18px',
                                                  fontWeight: 'normal',
                                                  height: '50px'}}/>
        {' '}
          <Button onClick= { this.handleSubmit }
      style={{left: 5, marginLeft: '10px', fontSize: 15,
              color: 'grey', overflow:'hidden',
              borderRadius:5, backgroundColor: 'white',
              height: '50px',
              width: '75px',
              fontWeight: 'bold',
              fontSize: '20px',
              backgroundColor: '#3498db',
              color: '#fff',
              borderColor: '#3498db'}}>
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
