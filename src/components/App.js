import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import axios from "axios";
import Search from "./Search";
import Alert from "./Alert";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      loading: false,
      users: [],
      alert: null,
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

  searchUsers(keyword) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) =>
          this.setState({ users: res.data.items, loading: false })
        );
    }, 500);
  }

  clearUsers() {
    this.setState({ users: [] });
  }

  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 1000);
  }

  render() {
    const { users, loading, alert } = this.state;
    return (
      <div>
        <Navbar />
        <Alert alert={alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users users={users} loading={loading} />
      </div>
    );
  }
}

export default App;
