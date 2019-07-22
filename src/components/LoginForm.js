import React from 'react'

export default class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    const { handleLogin } = this.props
    const { username, password } = this.state
    const { handleInputChange } = this

    return (
      <form onSubmit={handleLogin}>
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

        <input type="submit" value="Log In" />
      </form>
    )
  }
}