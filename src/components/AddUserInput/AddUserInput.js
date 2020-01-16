import React, { Component } from 'react'

import API from '../../API'

export default class AddUserInput extends Component {

  state = {
    users: [],
  }

  renderOptions = () => {
    return this.state.users.map( u => 
      <option 
        key={u.id} 
        value={u.username}
      ></option>
    )
  }

  componentDidMount = () => {
    API.fetchUsersNotInConversation(this.props.conversationId)
    .then(users => this.setState({ users }))
  }
  
  render() {
    const { searchTerm, handleSearchChange, handleUserSelect} = this.props
    const { renderOptions } = this
    
    return (
      <div>
        <input
          list="user-list"
          value={searchTerm}
          onChange={handleSearchChange}
          onInput={handleUserSelect}
        />
        <datalist id="user-list">
          { renderOptions() }
        </datalist>
      </div>
    )
  }
}
