import React from 'react'

export default class SignupForm extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    const { handleSignup } = this.props
    const { username, password, passwordConfirmation } = this.state
    const { handleInputChange } = this

    return (
      <form onSubmit={handleSignup}>
        <label htmlFor="username" >Username</label>
        <br/>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <br/><br/>

        <label htmlFor="password" >Password</label>
        <br/>
        <input
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <br/><br/>

        <label htmlFor="passwordConfirmation" >Password Confirmation</label>
        <br/>
        <input
          id="passwordConfirmation"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleInputChange}
        />
        <br/><br/>

        <input type="submit" value="Log In" />
      </form>
    )
  }
}