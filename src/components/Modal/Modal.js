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
import s from './Modal.css'

import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Map from '../Map';
import Feedback from '../Feedback';
import Footer from '../Footer';

class Modal extends Component {

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

export default withStyles(s)(Modal);
