import React from 'react'

import Message from '../../components/Message/Message'

import './MessageContainer.css'

export default function MessageContainer(props) {
  return (
    <div id="message-container">
      {
        props.messages.map( (message, idx) => 
          <Message key={idx} message={message} />
        )
      }
    </div>
  )
}
