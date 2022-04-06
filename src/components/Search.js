import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }

  onChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.keyword);
    this.setState({ keyword: "" });
  }
  render() {
    const { keyword } = this.state;
    const { clearUsers, showClearButton } = this.props;
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={keyword}
              onChange={this.onChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        {showClearButton && (
          <button
            onClick={clearUsers}
            className="btn btn-secondary btn-sm btn-block mt-2"
          >
            {" "}
            Clear Results{" "}
          </button>
        )}
      </div>
    );
  }
}

export default Search;
