import React, { Component } from 'react'

import UserPreview from '../../components/UserPreview/UserPreview'

export default class AddUserContainer extends Component {

  state = {
    searchTerm: '',
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  renderFiveUsers = () => {
    return this.props.users
    .filter( u => u.username.toLowerCase().includes(this.state.searchTerm.toLowerCase()) )
    .slice(0, 5)
    .map( u => <UserPreview key={u.id} user={u} addUserToConversation={this.props.addUserToConversation} />)
  }
  
  render() {
    const { searchTerm } = this.state
    const { handleSearchChange, renderFiveUsers } = this

    return (
      <div>
        <input 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        { renderFiveUsers() }
      </div>
    )
  }
}
