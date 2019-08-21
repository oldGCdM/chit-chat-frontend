import React from 'react'

import './ConversationPreview.css'

export default function ConversationPreview(props) {
  const { 
    username, 
    conversation: { id, name, users }, 
    setCurrentConversation,
  } = props

  const usernames = users.map(u => u.username)
  usernames.sort( (a, b) => a === username ? 1 : -1) // move your own username to end of array

  return (
    <div className="conversation-preview" onClick={() => setCurrentConversation(id)} >
      <h5>{name}</h5>
      <h6>{usernames.join(", ")}</h6>
    </div>
  )
}
