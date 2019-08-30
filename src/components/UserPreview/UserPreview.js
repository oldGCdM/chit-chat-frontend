import React from 'react'

import './UserPreview.css'

export default function UserPreview({ user, addUserToConversation }) {
  return (
    <div 
      className="user-preview"
      onClick={ () => addUserToConversation(user.id) } 
    >
      {user.username}
    </div>
  )
}
