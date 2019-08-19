import React from 'react'

import TopBar from '../../containers/TopBar/TopBar'
import SideBar from '../../containers/SideBar/SideBar'
import ConversationContent from '../../containers/ConversationContent/ConversationContent'

import './MainPage.css'

export default class MainPage extends React.Component {
  
  render() {
    const { history, location, match } = this.props
    const routerProps = { history, location, match }

    return (
      <div id="main" >
        <TopBar {...routerProps} />
        <SideBar />
        <ConversationContent />
      </div>
    )
  }
}