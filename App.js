import React, { Component } from 'react';

import MainComponent from './mainComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: ''
    }

    this.setTestValue = this.setTestValue.bind(this);
  }

  setTestValue(value) {
    this.setState({
      testValue: value
    });
  }

  render() {
    return (
      <MainComponent />
    );
  }
}
