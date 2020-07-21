import React, { Component } from 'react';

import ReactDom from 'react-dom';
import './Demo.css';
class Demo extends Component {
  render() {
    return <div className="maindiv_style">
      <h1> Hello {this.props.name}</h1>
    </div>
  }
}

export default Demo;