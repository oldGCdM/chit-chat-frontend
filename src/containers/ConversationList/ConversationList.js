import React, { Component } from 'react'

import ConversationPreview from '../../components/ConversationPreview/ConversationPreview'

export default class ConversationList extends Component {
  render() {
    return (
      <div>
        CONVERSATION LIST
        <ConversationPreview />
        <ConversationPreview />
        <ConversationPreview />
      </div>
    )
  }
}
