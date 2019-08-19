import React, { Component } from 'react'

import Search from '../../components/Search/Search'
import ConversationList from '../ConversationList/ConversationList'

import "./SideBar.css"

export default class SideBar extends Component {
  render() {
    return (
      <div id="side-bar">
        <Search />
        <ConversationList />
      </div>
    )
  }
}
