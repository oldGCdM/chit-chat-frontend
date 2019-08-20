import React from 'react'
import io from 'socket.io-client'

import TopBar from '../../containers/TopBar/TopBar'
import SideBar from '../../containers/SideBar/SideBar'
import ConversationContainer from '../../containers/ConversationContainer/ConversationContainer'

import './MainPage.css'

export default class MainPage extends React.Component {

  state = {
    conversations: [],
  }

  componentDidMount() {
    const socket = io('http://localhost:3001')

    socket.on('initial-conversations', conversations => this.setState({ conversations }) )
  }
  
  render() {
    const { history, location, match } = this.props
    const routerProps = { history, location, match }

    return (
      <div id="main" >
        <TopBar {...routerProps} />
        <SideBar />
        <ConversationContainer />
      </div>
    )
  }
}