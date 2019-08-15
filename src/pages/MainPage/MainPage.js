import React from 'react'

import TopBar from '../../containers/TopBar/TopBar'
import MasterList from '../../containers/MasterList/MasterList'
import ConversationContent from '../../containers/ConversationContent/ConversationContent'

import './MainPage.css'

export default class MainPage extends React.Component {
  
  render() {
    return (
      <div id="main" >
        <TopBar />
        <MasterList />
        <ConversationContent />
      </div>
    )
  }
}