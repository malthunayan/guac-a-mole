import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "200px",
          backgroundColor: "white",
          display: "inline-block",
          padding: "50px",
          borderRadius: "20px"
        }}
      >
        <h1>Guac-A-Mole</h1>
        <h4>Make the fastest and most delicious guacamole</h4>
        <button
          onClick={this.props.start()}
          type="button"
          class="btn btn-primary rounded-pill btn-lg"
          style={{ marginTop: "40px" }}
        >
          Start
        </button>
      </div>
    );
  }
}
