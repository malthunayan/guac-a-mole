import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";
import GameScreen from "./Components/GameScreen";
class App extends React.Component {
  state = {
    GameScreen: false
  };
  ClickStart = () => {
    this.setState({ GameScreen: true });
  };
  render() {
    return (
      <div className="App">
        {this.state.GameScreen ? (
          <GameScreen />
        ) : (
          <HomePage start={() => this.ClickStart} />
        )}
      </div>
    );
  }
}

export default App;
