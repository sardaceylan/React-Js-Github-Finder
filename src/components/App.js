import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import User from "./User";

export class App extends Component {
  render() {
    const a = 123;
    return (
      <Fragment>
        <Navbar />
        <User />
      </Fragment>
    );
  }
}

export default App;
