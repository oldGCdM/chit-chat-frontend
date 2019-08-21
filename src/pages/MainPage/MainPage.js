import React from 'react'
import io from 'socket.io-client'

import TopBar from '../../containers/TopBar/TopBar'
import SideBar from '../../containers/SideBar/SideBar'
import ConversationContainer from '../../containers/ConversationContainer/ConversationContainer'

import './MainPage.css'

export default class MainPage extends React.Component {

  state = {
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

  componentDidMount() {
    const socket = io('http://localhost:3001')

    socket.on('initial-conversations', conversations => this.setState({ conversations }) )
  }
  
  render() {
    const { conversations } = this.state
    const { history, location, match, username } = this.props
    const { conversationPreviews, setCurrentConversation, currentConversation } = this
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
        />
      </div>
    )
  }
}