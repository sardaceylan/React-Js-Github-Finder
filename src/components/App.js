import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import axios from "axios";
import Search from "./Search";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get("https://api.github.com/users")
        .then((res) => this.setState({ users: res.data, loading: false }));
    }, 500);
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <Search />
        <Users users={users} loading={loading} />
      </div>
    );
  }
}

export default App;
