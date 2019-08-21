import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from './pages/AuthPage/AuthPage'
import MainPage from './pages/MainPage/MainPage'
import API from './API'

import './App.css';

class App extends React.Component {

  state = {
    username: "",
    dataLoaded: false,
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

  componentDidMount() {
    API.validate()
    .then( resp => {
      if (resp.error) {
        this.props.history.push('/login')
      } else {
        this.setState({ username: resp.username })
        this.props.history.push('/')
      }
    })
    .then( () => this.setState({ dataLoaded: true }))
  }

  render() {
    const { handleSignup, handleLogin, handleLogout } = this
    const { username, dataLoaded } = this.state

    return (
      <div id="app">
        {
          dataLoaded
          ? <Switch>
            <Route
              exact
              path={["/login", "/signup"]}
              render={(routerProps) => 
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
              render={(routerProps) => 
                <MainPage 
                  {...routerProps} 
                  username={username}
                  handleLogout={handleLogout}
                />
              } 
            />
            <Redirect to="/" />
          </Switch>
          : "Loading"
        }
      </div>
    )
  }

}

export default withRouter(App);
