import React from 'react'

import './AddUserButton.css'

export default function AddUserButton({ toggleShowUsers }) {
  return (
    <div id="add-user-button">
      <button onClick={toggleShowUsers} >+ Add User</button>
    </div>
  )
}
