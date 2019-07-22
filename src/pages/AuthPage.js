import React from 'react'

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default class AuthPage extends React.Component {

  state = {
    login: true,
  }

  handleFormToggle = () => {
    this.setState({ login: !this.state.login })
  }
  
  render() {
    const { handleSignup, handleLogin } = this.props

    return (
      <>
        <h2 onClick={this.handleFormToggle}>Login / Signup</h2>
        {
          this.state.login
          ? <LoginForm handleLogin={handleLogin} />
          : <SignupForm handleSignup={handleSignup} />
        }
      </>
    )
  }
}