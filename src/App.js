import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'
import API from './API'

import './App.css';

class App extends React.Component {

  state = {
    username: null,
  }
  
  handleSignup = ({ username, password }) => {
    //add some async feedback for the user (i.e. disable the forms, or show loading sign)
    // move this to SignupForm and pass postAuth down through props
    API.signup({ username, password })
    .then( this.postAuth )
  }

  handleLogin = ({ username, password }) => {
    //add some async feedback for the user (i.e. disable the forms, or show loading sign)
    // move this to LoginForm and pass postAuth down through props
    API.login({ username, password })
    .then( this.postAuth )
  }

  postAuth = (userData) => {
    if (userData.error) {
      alert(userData.error)
    } else {
      this.setState({ username: userData.username })
      this.props.history.push('/main')
    }
  }

  handleLogout = () => {
    console.log("Logging out")
  }

  render() {
    const {  handleSignup, handleLogin } = this

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path={["/login", "/signup"]}
            component={(routerProps) => 
              <AuthPage 
                {...routerProps}
                handleLogin={handleLogin} 
                handleSignup={handleSignup} 
              />
            } 
          />
          <Route
            exact
            path="/"
            component={(routerProps) => 
              <MainPage {...routerProps} />
            } 
          />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }

}

export default withRouter(App);
