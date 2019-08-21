import React from 'react'

import Message from '../../components/Message/Message'

export default function MessageContainer(props) {
  return (
    <div>
      {
        props.messages.map( (message, idx) => 
          <Message key={idx} message={message} />
        )
      }
    </div>
  )
}
