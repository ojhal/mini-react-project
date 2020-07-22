import React from 'react';
import './Avatar.css';
import 'tachyons';

import Avatarlist from './Avatarlist';
const Avatar = (props) => {

  const Avatarlistarray = [
    {
      id: 1,
      name: "Jyoti",
      work: "Web developer"
    },
    {
      id: 2,
      name: "Sonam",
      work: "Programmer"
    },
    {
      id: 3,
      name: "SonamTechnical",
      work: "FrontEnd developer"
    },
    {
      id: 4,
      name: "JyotiTechnical",
      work: "BackEnd developer"
    }
  ]

  return (
    <div>
      <h1> Welcome to Avatar World</h1>
      <Avatarlist id={Avatarlistarray[0].name}
        name={Avatarlistarray[0].name}
        work={Avatarlistarray[0].work} />

      <Avatarlist id={Avatarlistarray[1].name}
        name={Avatarlistarray[1].name}
        work={Avatarlistarray[1].work} />

      <Avatarlist id={Avatarlistarray[2].name}
        name={Avatarlistarray[2].name}
        work={Avatarlistarray[2].work} />

      <Avatarlist id={Avatarlistarray[3].name}
        name={Avatarlistarray[3].name}
        work={Avatarlistarray[3].work} />

      <button>Subscribe</button>
    </div>
  )
}




export default Avatar;