import React from 'react'

export default function MessageInput(props) {

  const [message, setMessage] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    props.handleMessageSubmit(message, props.conversationId)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Message input" 
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </form>
  )
}
