import React from 'react'

export default class SignupForm extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { username, password, passwordConfirmation } = this.state

    if (password === passwordConfirmation) {
      this.props.handleSignup({ username, password })
    } else {
      // change something in state to highlight password input elements
      alert("Your passwords must match")
    }
  }
  
  render() {
    // const { handleSignup } = this.props
    const { username, password, passwordConfirmation } = this.state
    const { handleSubmit, handleInputChange } = this

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username</label>
        <br/>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <br/><br/>

        <label htmlFor="password" >Password</label>
        <br/>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <br/><br/>

        <label htmlFor="passwordConfirmation" >Password Confirmation</label>
        <br/>
        <input
          type="password"
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