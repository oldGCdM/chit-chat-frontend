import React, { Component } from 'react'

import Menu from '../Menu/Menu'
import Search from '../../components/Search/Search'

import './TopBar.css'

export default class TopBar extends Component {
  render() {
    const { history, location, match } = this.props
    const routerProps = { history, location, match }
    
    return (
      <div id="top-bar">
        <Search />
        <Menu {...routerProps} />
      </div>
    )
  }
}
