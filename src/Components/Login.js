import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

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
    fetch(`http://localhost:3001/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
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
      <div>
        <h2>Login</h2>
        <Form>
          <Input 
            placeholder='Email' 
            type='text' 
            name='email'
            value={this.state.email}
            onChange={this.handleChange}/>
          <br/>
          <Input 
            placeholder='Password' 
            type='password' 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}/>
          <br/>
          <Button 
            onClick={this.handleSubmit}
            type='submit'>
            Log in
          </Button>
        </Form>
        <br/>
        <Link to="/login">Forgot password?</Link> or <Link to="/signup">Sign up</Link>
      </div>
      

    )
  }
}