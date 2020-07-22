import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';

import Avatarlist from './Avatarlist';
class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to Avatar World"
    }
  }
  nameChange() {
    this.setState({
      name: "Web Communication"
    })
  }
  render() {
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

    const avatararraycard = Avatarlistarray.map((avatarcard, i) => {
      return <Avatarlist key={i} id={Avatarlistarray[i].name}
        name={Avatarlistarray[i].name}
        work={Avatarlistarray[i].work} />

    })

    return (
      <div className="design">
        <h1>{this.state.name}</h1>
        {avatararraycard}
        <button onClick={() => this.nameChange()}>Subscribe</button>
      </div>
    )
  }
}




export default Avatar;