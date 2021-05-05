// do componentDidMount wiht same fetch request etc as login but post to signup not login

import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react';

export default class SignUp extends React.Component {

  constructor() {
    super()

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <div>
        <h2>Sign up</h2>
        <Form>
        <Input
          placeholder='First name'
          type='text'
          name='first_name'
          // value={}
        />
        <br/>
        <Input
          placeholder='Last name'
          type='text'
          name='last_name'
        // value={}
        />
        <br />
        <Input
          placeholder='Email'
          type='text'
          name='email'
        // value={}
        />
        <br />
        <Input
          placeholder='Password'
          type='text'
          name='password'
        // value={}
        />
        </Form>
      </div>
    )
  }
}