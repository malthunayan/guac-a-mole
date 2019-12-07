import React, { Component } from "react";
import { connect } from "react-redux";
import GameScreen from "./GameScreen";
class EndScreen extends Component {
  state = {
    reset: false
  };
  handleClick = () => {
    this.setState({ reset: true });
  };
  render() {
    if (this.state.reset) {
      this.props.reset();
      return <GameScreen />;
    } else
      return (
        <div
          style={{
            marginTop: "200px",
            backgroundColor: "white",
            display: "inline-block",
            padding: "100px",
            borderRadius: "20px"
          }}
        >
          <h1>Game Over</h1>
          <h4>Your Score:{this.props.ctr}</h4>
          <button
            onClick={this.handleClick}
            type="button"
            class="btn btn-primary rounded-pill btn-lg"
            style={{ marginTop: "40px" }}
          >
            Play Again
          </button>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    time: state.time
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: "INCREMENT" }),
    dec: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);
