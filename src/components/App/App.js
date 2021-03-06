/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.css';
import Header from '../Header';
import Map from '../Map';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Row from '../Row';
import Box from '../Box';
import Topbar from '../Topbar';

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
    };
  }

  componentWillMount() {

    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentDidMount() {
    this.addCss('https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css')
  }

  addCss(fileName) {
    var head = document.head
    var link = document.createElement('link')

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = fileName
    head.appendChild(link)
    console.log(link)
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return (<div>
            <Topbar />
            <Box />
            </div>);
  }

}

export default App;
