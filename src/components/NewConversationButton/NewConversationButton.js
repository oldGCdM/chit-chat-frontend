import React from 'react'

export default function NewConversationButton({ handleNewConversation }) {
  return (
    <div>
      <button onClick={handleNewConversation} >New Conversation</button>
    </div>
  )
}

