import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import { execute } from '../utils/helpers';

import { Tweet } from '../Tweet';
import './Generator.less';

export class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '', output: null };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value, output: null });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { value } = this.state;
    const output = execute(value);

    this.setState({ output });
  };

  render() {
    const { value, output } = this.state;

    return (
      <div>
        <Jumbotron className="Generator">
          <form className="form" onSubmit={this.handleSubmit}>
            <h2>Who tweet it?</h2>
            <textarea placeholder="Write your tweet here.." value={value} onChange={this.handleChange} />
            <button type="submit">Check</button>
          </form>
        </Jumbotron>
        { output ? <div>{ output.catchPhrase }</div> : '' }
        { output ? <Tweet name={output.name} nick={output.nick} imageSrc={output.imageSrc} tweet={value} /> : '' }
      </div>
    );
  }
}
