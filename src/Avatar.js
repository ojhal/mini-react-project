import React from 'react';
import './Avatar.css';
import 'tachyons';

import Avatarlist from './Avatarlist';
const Avatar = (props) => {

  return (
    <div>
      <h1> Welcome to Avatar World</h1>
      <Avatarlist id="1" name="Jyoti" work="Web Developer" />
      <Avatarlist id="1" name="Sonam" work="Web Developer" />
      <Avatarlist id="1" name="RahulTechnical" work="Web Developer" />
      <Avatarlist id="1" name="OjhalTechnical" work="Web Developer" />

      <button>Subscribe</button>
    </div>
  )
}




export default Avatar;