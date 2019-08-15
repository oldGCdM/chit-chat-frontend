import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default class AuthPage extends React.Component {
  
  redirectTo = (path) => {
    this.props.history.push(path)
  }
  
  render() {
    const { handleSignup, handleLogin } = this.props
    // const currentPath = match.path.slice(1)

    // const login = currentPath === "login" ? "<b>Login</b>" : "Login"
    // const signup = currentPath === "signup" ? "<strong>Sign Up</strong>" : "Sign Up"
    // // debugger
    return (
      <Switch>
        <Route exact path='/login'
          render={() => 
            <>
              <h2>
                <span>
                  <u>Log in</u>
                </span>
                {"  OR  "}
                <span onClick={() => this.redirectTo('/signup')}>
                  Sign up
                </span>
              </h2>
              <LoginForm handleLogin={handleLogin} />
            </>
          }
        />
        <Route exact path='/signup'
          render={() => 
            <>
              <h2>
                <span onClick={() => this.redirectTo('/login')}>
                  Log in
                </span>
                {"  OR  "}
                <span>
                  <u>Sign up</u>
                </span>
              </h2>
              <SignupForm handleSignup={handleSignup} />
            </>
          }
        />
      </Switch>
    )
  }
}