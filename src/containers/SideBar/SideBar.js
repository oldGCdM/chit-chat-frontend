import React, { Component } from 'react'

import NewConversationButton from '../../components/NewConversationButton/NewConversationButton'
import ConversationList from '../ConversationList/ConversationList'

import "./SideBar.css"

export default class SideBar extends Component {
  render() {
    const { conversations, username, setCurrentConversation, handleNewConversation } = this.props
    
    return (
      <div id="side-bar">
        <NewConversationButton 
          handleNewConversation={handleNewConversation}
        />
        <ConversationList 
          conversations={conversations} 
          username={username}
          setCurrentConversation={setCurrentConversation}
        />
      </div>
    )
  }
}
