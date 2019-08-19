import React, { Component } from 'react'

import Menu from '../Menu/Menu'
import Avatar from '../../components/Avatar/Avatar'

import './TopBar.css'

export default class TopBar extends Component {
  render() {
    const { history, location, match } = this.props
    const routerProps = { history, location, match }
    
    return (
      <div id="top-bar">
        <Avatar />
        <Menu {...routerProps} />
      </div>
    )
  }
}
