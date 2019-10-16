import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getBitcoinPrice } from "./api/Bitcoin";

class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  };

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();

    this.setState(
      {
        bitcoinInfo,
        loading: false
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
