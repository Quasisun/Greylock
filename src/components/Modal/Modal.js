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
import Header from '../Header';
import Map from '../Map';
import Feedback from '../Feedback';
import Footer from '../Footer';

class Modal extends Component {

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

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
   return( <div class='contain'>
  <div id='modal-content' class='animate modal modal-content active'>
    <form id='modal-name' class='modal-popup' method='post'>
      <div class='col6 modal-body fill-white contain'>
        <a href='#close' class='quiet pad1 icon fr close dark'></a>
        <div class='fill-blue dark pad2y'>
          <div class='pad4x center'>
            <h2>Favorite dog name?</h2>
          </div>
          <div class='pad4x pad2y'>
            <input type='text' name='dog-name' class='round clean stretch space-bottom2' placeholder='e.g Penny' />
          </div>
        </div>
        <div class='fill-gray pad2y pad4x center clearfix'>
          <input type='submit' class='col6 margin3' value='Submit name!' />
        </div>
      </div>
    </form>
  </div>
</div>);

  }

}

export default Modal;
