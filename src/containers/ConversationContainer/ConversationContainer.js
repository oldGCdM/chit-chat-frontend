import React, { Component } from 'react'

import AddUserButton from '../../components/AddUserButton/AddUserButton'
import AddUserContainer from '../AddUserContainer/AddUserContainer'
import MessageContainer from '../MessageContainer/MessageContainer';
import MessageInput from '../../components/MessageInput/MessageInput';

import './ConversationContainer.css'

export default class ConversationContainer extends Component {

  state = {
    showUsers: false,
  }

  toggleShowUsers = () => {
    this.setState({ showUsers: !this.state.showUsers })
  }

  addUserToConversation = (userId) => {
    this.props.handleAddUserToConversation(userId, this.props.conversation.id)
  }
  
  render() {
    const { users, conversation, handleMessageSubmit } = this.props
    
    return (
      <div id="conversation-container">
      {
        conversation
        ? <>
          <AddUserButton toggleShowUsers={this.toggleShowUsers} />
          { this.state.showUsers ? <AddUserContainer users={users} addUserToConversation={this.addUserToConversation} /> : null }
          <MessageContainer messages={conversation.messages} />
          <MessageInput conversationId={conversation.id} handleMessageSubmit={handleMessageSubmit} />
        </>
        : <img src="https://i.pinimg.com/originals/22/32/4b/22324b56ab4956479efc2f4ecaa61b20.png" alt="Select Conversation" />
      }
      </div>
    )
  }
}
