import React, { Component } from 'react'

import ConversationPreview from '../../components/ConversationPreview/ConversationPreview'

export default class ConversationList extends Component {
  renderPreviews = () => {
    const { conversations, setCurrentConversation } = this.props
    
    return conversations.map( (conversation, idx) => 
      <ConversationPreview 
        key={idx} 
        conversation={conversation} 
        setCurrentConversation={setCurrentConversation}
      />
    )
  }
  
  render() {
    return (
      <div id="conversation-list">
        { this.renderPreviews() }
      </div>
    )
  }
}
