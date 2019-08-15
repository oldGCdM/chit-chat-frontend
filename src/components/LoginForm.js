import React from 'react'

export default class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.handleLogin(this.state)
  }
  
  render() {
    // const { handleLogin } = this.props
    const { username, password } = this.state
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

        <input type="submit" value="Log in" />
      </form>
    )
  }
}