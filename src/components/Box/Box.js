
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Box.css';
import Map from '../Map';
import Sidebar from '../Sidebar';

class Box extends Component {
  getInitialState: function() {
  	return {'path': [], 'points': []};
  }

  callBack: function(path, points) {
  	this.setState({'path': path, 'points': points});
  }

  render = () => {
  	return (<div className={s.box}> <Map path={this.state.path} points={this.state.points}/> <Sidebar callBack={this.setState}/> </div>);
  }
}

export default withStyles(s)(Box);
