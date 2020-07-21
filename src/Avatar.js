import React from 'react';
import './Avatar.css';
import 'tachyons';

import Avatarlist from './Avatarlist';
const Avatar = (props) => {

  return (
    <div>
      <h1> Welcome to Avatar World</h1>
      <Avatarlist id="1" name="Ojhal" work="Web Developer" />
      <Avatarlist />
      <Avatarlist />
      <Avatarlist />

      <button>Subscribe</button>
    </div>
  )
}




export default Avatar;