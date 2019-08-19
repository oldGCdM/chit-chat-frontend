import React, { Component } from 'react'

import API from '../../API'

import './Menu.css'

export default class Menu extends Component {

  handleLogout = () => {
    API.logout()
    .then( response => this.props.history.push('/login') )
  }
  
  render() {
    // For now just a logout button
    return (
      <div id="menu" >
        <button onClick={this.handleLogout} >Logout</button>
      </div>
    )
  }
}
