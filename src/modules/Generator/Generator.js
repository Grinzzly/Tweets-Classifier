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
      <Jumbotron id="heart" className="Heart">
        <form onSubmit={this.handleSubmit}>
          <label>
            Tweet:
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Check" />
        </form>
      </Jumbotron>
    );
  }
}
