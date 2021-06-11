// this is a class component
import React, { Component } from 'react';
import User from "./User";

class Users extends Component {

  state = {
    users: [
      {
        name: 'Alpha',
        age: 10
      },
      {
        name: 'Beta',
        age: 20
      },
      {
        name: 'Gama',
        age: 30
      },

    ]
  }
  render() {
    const {pageTitle} = this.props;
    return (
      <div>
        <h1>{pageTitle}</h1>
        {/* <User name="Alpha" />
        <User name="Beta" age="30" />
        <User />
        <User name="Gama" age="40" /> */}
      </div>
    )
  }
}

export default Users;