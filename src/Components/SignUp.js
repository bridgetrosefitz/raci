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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/users')
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
          value={this.state.first_name}
          onChange={this.handleChange}
        />
        <br/>
        <Input
          placeholder='Last name'
          type='text'
          name='last_name'
          value={this.state.last_name}
          onChange={this.handleChange}
        />
        <br />
        <Input
          placeholder='Email'
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <Input
          placeholder='Password'
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <Button
          type="submit"
          onSubmit={this.handleSubmit}
          >Create account</Button>
        </Form>
        <br />
        <a>Login</a>
      </div>
    )
  }
}