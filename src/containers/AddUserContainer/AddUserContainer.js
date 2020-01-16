import React, { Component } from 'react'

// import UserPreview from '../../components/UserPreview/UserPreview'
import AddUserInput from '../../components/AddUserInput/AddUserInput'

export default class AddUserContainer extends Component {

  state = {
    searchTerm: '',
    showInput: false,
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  toggleShowInput = () => {
    this.setState({ showInput: !this.state.showInput })
  }

  handleUserSelect = (event) => {
    if (event.nativeEvent.constructor !== InputEvent) {
      this.props.addUserToConversation(event.target.value)
      this.setState({
        searchTerm: '',
        showInput: false,
      })
    }
  }

  render() {
    const { searchTerm, showInput } = this.state
    const { handleSearchChange, toggleShowInput, handleUserSelect } = this

    return (
      <div id="add-user-container">
        { 
          showInput 
          ? <AddUserInput
              conversationId={this.props.conversationId}
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              handleUserSelect={handleUserSelect}
            /> 
          : null 
        }
        <button onClick={toggleShowInput} >+ Add User</button>
      </div>
    )
  }
}
