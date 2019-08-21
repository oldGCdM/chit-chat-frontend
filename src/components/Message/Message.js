import React from 'react'

export default function Message({ message }) {
  return (
    <>
      <span>{message.senderUsername}</span>
      <p>{message.content}</p>
    </>
  )
}
