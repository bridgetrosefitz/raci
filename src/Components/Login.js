import React from 'react';
import { Input, Button, Form, Card, Container, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { API_HOST } from '../api/helper';
import API from '../api'

export default class Login extends React.Component {
  
  constructor() {
    super()

    this.state = {
      loginInfo: {
        email: '',
        password: ''
      },
      errors: null
    }
  }
 
  handleSubmit = (e) => {
    e.preventDefault()
    API.User.login(this.state.loginInfo)
    .then(data => {
      if(data.token) {
      localStorage.token = data.token
      this.props.history.push('/projects')
      } 
    })
    .catch((data) => {
      this.setState({
        errors: data.errors[0]
        })
      setTimeout(() => this.setState({
        errors: null,
       }), 2000)
    })
  }

  handleChange = (e) => {
    this.setState(prevState => ({
        loginInfo: {
        ...prevState.loginInfo,
        [e.target.name]: e.target.value
        }
    }))
  }

  render(){
    return(
      <Container style={{height: '100vh', marginTop: '10%'}}textAlign="center">
        <Card centered style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 20, paddingRight: 20}}>
          <h2>Login</h2>
          <Form error={this.state.error ? true : false}>
            <Form.Input
              placeholder='Email'
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange} />
            <br />
            <Form.Input
              placeholder='Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange} />
              <Message
                error
                header={'Error'}
                content={this.state.errors}  
                ></Message>
            <br />
            <br />
            <Button
              onClick={this.handleSubmit}
              type='submit'>
              Log in
            </Button>
          </Form>
          <br />
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Card>
      </Container>
    )
  }
}