import React from 'react';
import { Input, Button, Form, Card, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { API_HOST } from '../api/helper';
import API from '../api'

export default class Login extends React.Component {
  
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }
 
  handleSubmit = (e) => {
    e.preventDefault()
    API.User.login(this.state)
    .then(data => {
      if(data.token) {
      localStorage.token = data.token
      this.props.history.push('/projects')
      } 
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return(
      <Container style={{height: '100vh', marginTop: '10%'}}textAlign="center">
        <Card centered style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 20, paddingRight: 20}}>
          <h2>Login</h2>
          <Form>
            <Input
              placeholder='Email'
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange} />
            <br />
            <Input
              placeholder='Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange} />
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