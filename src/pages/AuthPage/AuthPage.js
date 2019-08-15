import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';

import './AuthPage.css'

export default class AuthPage extends React.Component {
  
  redirectTo = (path) => {
    this.props.history.push(path)
  }
  
  render() {
    const { handleSignup, handleLogin } = this.props
 
    return (
      <div id="auth" >
        <Switch>
          <Route exact path="/login"
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
          <Route exact path="/signup"
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
      </div>
    )
  }
}