import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import { execute } from '../utils/helpers';

import './Generator.less';

export class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { value } = this.state;

    console.log(execute(value));
  };

  render() {
    const { value } = this.state;

    return (
      <Jumbotron className="Generator">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Who tweet it?</h2>
          <textarea placeholder="Write your tweet here.." value={value} onChange={this.handleChange} />
          <button type="submit">Check</button>
        </form>
      </Jumbotron>
    );
  }
}