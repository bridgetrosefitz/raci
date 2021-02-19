import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: `kevin@test.com`,
      password: `beef`,
      user_id: null
    }
  }

  // controlledForm = () => {

  // }

  handleButtonClick = () => {
    const userEmail = this.state.email
    const userPassword = this.state.password
    fetch(`http://localhost:3001/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        "email" : userEmail,
        "password" : userPassword
      })
    })
    .then(res => res.json())
    .then(data => {
      debugger
      })
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <Input placeholder='Your email' type='text'/>
        <br/>
        <Input placeholder='Password' type='password'/>
        <br/>
        <Button onClick={this.handleButtonClick}>Log in</Button>
        <br/>
        <a>Forgot password?</a> or <a>Sign up</a>
      </div>
      

    )
  }
}