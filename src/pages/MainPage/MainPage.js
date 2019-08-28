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
    this.state.socket.emit('new-message', { content, conversationId })
  }

  receiveNewMessage = (message, conversationId) => {
    const targetConversation = {...this.state.conversations.find(c => c.id === conversationId)}
    targetConversation.messages.push(message)

    this.setState({
      conversations: this.state.conversations.map(c => c.id === conversationId ? targetConversation : c)
    })
  }

  componentDidMount() {
    const socket = io('http://localhost:3001')

    socket.on('initial-conversations', conversations => this.setState({ socket, conversations }) )
    socket.on('new-message', this.receiveNewMessage)
  }
  
  render() {
    const { history, location, match, username } = this.props
    const { conversationPreviews, setCurrentConversation, currentConversation, handleMessageSubmit } = this
    const routerProps = { history, location, match }

    return (
      <div id="main" >
        <TopBar {...routerProps} />
        <SideBar 
          conversations={ conversationPreviews() } 
          username={username}
          setCurrentConversation={setCurrentConversation}
        />
        <ConversationContainer 
          conversation={ currentConversation() }
          handleMessageSubmit={handleMessageSubmit}
        />
      </div>
    )
  }
}