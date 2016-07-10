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
		  <Navbar style={{margin:0, height: "100%", }} className="navbar-inverse">
		    <Navbar.Header>
		  <Navbar.Brand style={{
        fontFamily: "Lato",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "27px",
      }}>>Transyt
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		    </Nav>
		  </Navbar>
	  </div>
	);
}


export default withStyles(s)(Topbar);
