import React, { Component } from "react";
import User from "./User";

export class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="container mt-3">
        <div className="row">
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
