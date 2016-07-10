
import React, { PropTypes, Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import { DestinationForm, PickupsForm } from '../Form';
import List from '../List';
import Row from '../Row';
import { fetchRoutes } from '../fetchRoutes';

class Sidebar extends Component {
  onDestinationSet = (destinationAddress) => {
    this.setState({"destination": destinationAddress});
  };

  onPickupsSet = (addresses) => {
    this.setState({"addresses": addresses});
    console.log('addresses: ');
    console.log(addresses);
    console.log('destination: ');
    console.log(this.state.destination);

    fetchRoutes(addresses, this.state.destination, this.props.callBack);
  };

  render = () => {
  return (

      <div className={s.Sidebar}>
      <DestinationForm onSet = { this.onDestinationSet } />
      <PickupsForm onSet={ this.onPickupsSet } />
      </div>
  );
}
}

export default withStyles(s)(Sidebar);
