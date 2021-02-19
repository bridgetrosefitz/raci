import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: null,
      password: null,
    }
  }

  handleButtonClick = () => {
    fetch('http://localhost:3001/api/v1/projects')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <Input placeholder='Your email' />
        <br/>
        <Input placeholder='Password' />
        <br/>
        <Button onClick={this.handleButtonClick}>Log in</Button>
        <br/>
        <a>Forgot password?</a> or <a>Sign up</a>
      </div>
      

    )
  }
}