import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "92527634",
      name: "Hüsnü Günel",
      login: "husnugunel",
      avatar_url: "https://avatars.githubusercontent.com/u/92527634?v=4",
      html_url: "https://github.com/husnugunel",
      followers: 1,
    };
  }
  render() {
    const { name, login, avatar_url, html_url, followers } = this.state;
    return (
      <div>
        <div className="card m-">
          <div className="row">
            <div className="col-md-3">
              <img src={avatar_url} alt="" className="card-img/" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Followers: {followers}</p>
                <a href={html_url} className="btn btn-primary btn-sm">Go Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
