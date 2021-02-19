import React from 'react';
import { Input } from 'semantic-ui-react';
import { Link } from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor() {
    super()

    // this.state = {

    // }
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <Input placeholder='Your email' />
        <br/>
        <Input placeholder='Password' />
        <br/>
        <a>Forgot password?</a> or <a>Sign up</a>
      </div>
      

    )
  }
}