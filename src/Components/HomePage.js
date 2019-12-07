import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <h1>Guca-A-Mole</h1>
        <h4>Make the fastest and most delicious guacamole</h4>
        <button
          onClick={this.props.start()}
          type="button"
          class="btn btn-outline-success"
          style={{ marginTop: "40px" }}
        >
          Start
        </button>
      </div>
    );
  }
}
