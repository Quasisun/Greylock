import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Topbar.css';

import {
	Navbar,
	Nav,
	NavItem
} from 'react-bootstrap'

function Topbar () {
	return(
	  <div>
		  <Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <img src={'http://tinypic.com?ref=3581jpk'} alt="boohoo" className="img-responsive"/>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      <NavItem eventKey={1} href="#">Link</NavItem>
		      <NavItem eventKey={2} href="#">Link</NavItem>
		    </Nav>
		  </Navbar>
	  </div>	
	);
}


export default withStyles(s)(Topbar);