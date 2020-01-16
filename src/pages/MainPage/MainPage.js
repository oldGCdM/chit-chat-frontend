import React from 'react'
import io from 'socket.io-client'

import TopBar from '../../containers/TopBar/TopBar'
import SideBar from '../../containers/SideBar/SideBar'
import ConversationContainer from '../../containers/ConversationContainer/ConversationContainer'

import './MainPage.css'

export default class MainPage extends React.Component {

  state = {
    socket: null,
    conversations: [],
    currentConversationId: null,
  }

  conversationPreviews = () => {
    return this.state.conversations.map(convo => {
      return {
        id: convo.id,
        name: convo.name,
        users: convo.users,
      }
    })
  }

  setCurrentConversation = (conversationId) => {
    this.setState({ currentConversationId: conversationId })
  }

  currentConversation = () => {
    return this.state.conversations.find(c => c.id === this.state.currentConversationId)
  }

  handleMessageSubmit = (content, conversationId) => {
    this.state.socket.emit('create-message', { content, conversationId })
  }

  receiveNewMessage = (newMessage, conversationId) => {
    const targetConversation = {...this.state.conversations.find(c => c.id === conversationId)}
    targetConversation.messages.push(newMessage)

    this.setState({
      conversations: this.state.conversations.map(c => c.id === conversationId ? targetConversation : c)
    })
  }

  handleNewConversation = () => {
    this.state.socket.emit('create-conversation')
  }

  receiveNewConversation = (newConversation) => {
    this.setState({ conversations: [newConversation, ...this.state.conversations] })
  }

  handleAddUserToConversation = (username, conversationId) => {
    this.state.socket.emit('add-user-to-conversation', username, conversationId)
  }

  receiveNewUserInConversation = (user, conversationId) => {
    const updatedConversation = {...this.state.conversations.find(c => c.id === conversationId)}
    updatedConversation.users.push(user)
    
    this.setState({
      conversations: this.state.conversations.map(c => c.id === conversationId ? updatedConversation : c)
    })
  }

  componentDidMount() {
    const socket = io('http://localhost:3001')

    socket.on('initial-conversations', (conversations) => this.setState({ socket, conversations }) )
    socket.on('new-message', this.receiveNewMessage)
    socket.on('new-conversation', this.receiveNewConversation)
    socket.on('new-user-in-conversation', this.receiveNewUserInConversation)
  }
  
  render() {
    const { history, location, match, username } = this.props
    const { conversationPreviews, setCurrentConversation, currentConversation, handleMessageSubmit, handleNewConversation, handleAddUserToConversation } = this
    const routerProps = { history, location, match }

    return (
      <div id="main" >
        <TopBar {...routerProps} />
        <SideBar 
          conversations={ conversationPreviews() } 
          username={username}
          setCurrentConversation={setCurrentConversation}
          handleNewConversation={handleNewConversation}
        />
        <ConversationContainer 
          conversation={ currentConversation() }
          handleAddUserToConversation={handleAddUserToConversation}
          handleMessageSubmit={handleMessageSubmit}
        />
      </div>
    )
  }
}