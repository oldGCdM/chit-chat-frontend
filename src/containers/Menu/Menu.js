import React, { Component } from 'react'

import API from '../../API'

export default class Menu extends Component {

  handleLogout = () => {
    API.logout()
    .then( response => this.props.history.push('/login') )
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleLogout} >Logout</button>
      </div>
    )
  }
}
