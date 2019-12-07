import React, { Component } from "react";
import Avocado from "./Avocado.png";
import Empty from "./Empty.png";
import Taco from "./taco.png";
import { connect } from "react-redux";
class Circle extends Component {
  state = {
    IsGuca: false
  };
  handleClick = () => {
    if (this.props.x == 1) {
      this.props.Increment();
      this.setState({ IsGuca: true });
      setTimeout(() => {
        this.setState({ IsGuca: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div>
        <img
          src={this.state.IsGuca ? Taco : this.props.x == 1 ? Avocado : Empty}
          alt="Logo"
          width="200"
          height="180"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Increment: () => dispatch({ type: "INCREMENT" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Circle);
