import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'
import API from './API'

import './App.css';

class App extends React.Component {

  state = {
    user: null,
  }

  componentDidMount = () => {
    if( localStorage.getItem('token') ) this.validateToken()
  }
  
  handleSignup = event => {
    event.preventDefault()
    console.log("SIGN UP")
  }

  handleLogin = event => {
    event.preventDefault()
    console.log("LOG IN")
  }

  validateToken = () => {
    // API.validate()
    // .then( userData => {
    //   if(userData.error) {
    //     this.logout()
    //   } else {

    //   }
    // })
  }

  logout = () => {
    console.log("Logging out")
  }

  render() {
    const {  handleSignup, handleLogin } = this

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/login"
            component={() => 
              <AuthPage 
                handleLogin={handleLogin} 
                handleSignup={handleSignup} 
              />
            } 
          />
          <Route
            exact
            path="/"
            component={() => <MainPage />} 
          />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }

}

export default withRouter(App);
