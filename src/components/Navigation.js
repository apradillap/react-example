import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          { this.props.title }
        </a>
        <span className="badge badge-pill badge-light ml2">
          { this.props.todosSize }
        </span>
      </nav>
    );
  }
}

export default Navigation;
