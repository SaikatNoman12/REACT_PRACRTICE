import { Component } from "react";

export default class Students extends Component {
  render() {
    return (
      <div>
        <h1>Total Student {this.props?.totalStudent}</h1>
        <h3>First Student {this.props?.firstStudent}</h3>
      </div>
    );
  }
}
