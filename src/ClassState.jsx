import React, { Component } from "react";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }

  changeName() {
    // this.setState({ data: "Abdullah Al Noaan" });
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <button type="button" onClick={() => this.changeName()}>
          Change Anil
        </button>
        <h1>Hello Class State</h1>
      </div>
    );
  }
}
