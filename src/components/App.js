import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
