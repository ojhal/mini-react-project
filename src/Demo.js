import React, { Component } from 'react';

import ReactDom from 'react-dom';

class Demo extends Component {
  render() {
    return <h1> Hello {this.props.name}</h1>
  }
}

export default Demo;