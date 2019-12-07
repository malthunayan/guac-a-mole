import React, { Component } from "react";
import Avocado from "./Avocado.png";
import Empty from "./Empty.png";
import Taco from "./taco.png";
import Circle from "./Circle";
import EndScreen from "./EndScreen";
import { connect } from "react-redux";
class GameScreen extends Component {
  state = {
    end: false,
    Size: 15
  };
  componentDidMount() {
    this.x = setInterval(() => {
      this.props.dec();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.x);
  }

  IncreaseScore = () => {
    let newScore = this.state.score + 5;
    this.setState({ score: newScore });
  };
  render() {
    if (this.props.time <= 0) {
      return <EndScreen />;
    } else
      return (
        <div
          style={{
            marginTop: "200px",
            backgroundColor: "white",
            display: "inline-block",
            padding: "50px",
            borderRadius: "20px",
            marginBottom: "200px"
          }}
        >
          <h1>Guac-A-Mole</h1>
          <h4>
            Time:
            <span
              className={this.props.time <= 10 ? "blinking" : ""}
              style={{
                color: this.props.time > 10 ? "black" : "red"
              }}
            >
              {this.props.time} seconds
            </span>
          </h4>
          <h4>Score:{this.props.ctr}</h4>
          <div class="container" class="mr-5 mt-5">
            <div class="row" style={{ marginLeft: "30px" }}>
              {/* <img src={Avocado} alt="Logo" width="200" height="180" />
            <img src={Empty} alt="Logo" width="220" height="180" />
            <img src={Taco} alt="Logo" width="250" height="190" /> */}
              <Circle
                x={Math.floor(Math.random() * 4)}
                score={() => this.IncreaseScore}
              />
              <Circle
                x={Math.floor(Math.random() * 4)}
                score={() => this.IncreaseScore}
              />
              <Circle
                x={Math.floor(Math.random() * 4)}
                score={() => this.IncreaseScore}
              />
            </div>
            <div class="row" style={{ marginLeft: "100px" }}>
              {/* <img src={Empty} alt="Logo" width="220" height="180" /> */}
              <Circle
                x={Math.floor(Math.random() * 4)}
                score={() => this.IncreaseScore}
              />
              <Circle
                x={Math.floor(Math.random() * 4)}
                score={() => this.IncreaseScore}
              />
            </div>
          </div>
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
    dec: () => dispatch({ type: "DECREMENT" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
