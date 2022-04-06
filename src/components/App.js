import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import axios from "axios";
import Search from "./Search";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
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

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={users.length > 0 ? true : false}
        />
        <Users users={users} loading={loading} />
      </div>
    );
  }
}

export default App;
