import React, { Component } from 'react'

import Search from '../../components/Search/Search'
import ConversationList from '../ConversationList/ConversationList'

import "./SideBar.css"

export default class SideBar extends Component {
  render() {
    const { conversations, username, setCurrentConversation } = this.props
    
    return (
      <div id="side-bar">
        <Search />
        <ConversationList 
          conversations={conversations} 
          username={username}
          setCurrentConversation={setCurrentConversation}
        />
      </div>
    )
  }
}
