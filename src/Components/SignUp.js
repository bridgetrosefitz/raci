// do componentDidMount wiht same fetch request etc as login but post to signup not login

import React from 'react'
import { Button, Form, Container, Card, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import API from '../api'

export default class SignUp extends React.Component {

  constructor() {
    super()

    this.state = {
      signupInfo: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      errors: null
    }
  }

  isValidEmailAddress = (address) => {
    return !!address.match(/.+@.+/);
  }

  signupInfoIsFull = () => {
   return (this.state.signupInfo.first_name.length > 1 && this.state.signupInfo.last_name.length > 1 && this.state.signupInfo.password.length > 1 ? true : false)
  }

  handleChange = (e) => {
    this.setState(prevState => ({
      signupInfo: {
        ...prevState.signupInfo,
        [e.target.name]: e.target.value
      }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
      API.User.signup(this.state.signupInfo)
      .then(data => {
        if(data.token) {
          localStorage.token = data.token
          this.props.history.push('/projects')
        }
      })
      .catch((data) => {
        if(data) {
          this.setState({
            errors: data.errors[0]
          })
          setTimeout(() => {
            this.setState({
              errors: null
            })}, 2000)
        }
        else {
          this.setState({
            errors: 'There was a problem creating your account. Please try again'
          })
        }
      })
  }

  componentDidMount() {
    this.props.toggleLoader(false)
  }
  
  render () {
    
    return (
      <Container style={{height: '100vh', marginTop: '10%'}} textAlign="center">
        <Card centered style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 20, paddingRight: 20}}>
          <h2>Sign up</h2>
          <Form error={this.state.errors}>
            <Form.Input
              placeholder='First name'
              type='text'
              name='first_name'
              value={this.state.first_name}
              onChange={this.handleChange}
            />
            <br />
            <Form.Input
              placeholder='Last name'
              type='text'
              name='last_name'
              value={this.state.last_name}
              onChange={this.handleChange}
            />
            <br />
            <Form.Input
              placeholder='Email'
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <Form.Input
              placeholder='Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Message 
              error
              header={'Error'}
              content={this.state.errors}
            ></Message>
            <br />
            <br />
            <Button
              onClick={this.handleSubmit}
              color={this.isValidEmailAddress(this.state.signupInfo.email) && this.signupInfoIsFull() ? 'blue' : false}
              type='submit'>
              Create account
            </Button>
          </Form>
          <br />
          Already have an account?  <Link to="/login">Login</Link>
        </Card>
      </Container>)
  }
}