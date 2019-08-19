import React, { Component } from 'react'

import MessageContainer from '../MessageContainer/MessageContainer';
import MessageInput from '../../components/MessageInput/MessageInput';

import './ConversationContainer.css'

export default class ConversationContent extends Component {
  render() {
    return (
      <div id="conversation-container">
        <MessageContainer />
        <MessageInput />
      </div>
    )
  }
}
