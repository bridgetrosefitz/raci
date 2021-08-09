import React from 'react';
import { Button, Form, Card, Container, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
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

  isValidEmailAddress = (address) => {
    return !!address.match(/.+@.+/);
  }

  loginInfoIsFull = () => {

    return (this.state.loginInfo.password.length > 1 ? true : false)
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

  componentDidMount() {
    this.props.toggleLoader(false)
    if (localStorage.token) {
      this.props.history.push('/projects')
    }
  }



  render(){
    return(
      <Container style={{height: '100vh', marginTop: '1%'}}textAlign="center">
        <div style={{
          position: 'relative',
          marginTop: '2em',
          marginBottom: '3em'}}>
          <Button 
            as='h1'
            onClick={() => this.props.history.push('/')}
            style={{
              margin: '0 auto',
              width: '80px',
              height: '30px',
              lineHeight: '0.5em',
              fontSize: '1em',
              borderRadius: '4px',
              backgroundColor: '#2185d0',
              color: '#fff'
            }}
            >RACI</Button>
        </div>
        <Card centered style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 20, paddingRight: 20}}>
          <h2>Login</h2>
          <Form error={this.state.errors}>
            <Form.Input
              placeholder='Email'
              type='email'
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
              color={this.isValidEmailAddress(this.state.loginInfo.email) && this.loginInfoIsFull() ? 'blue' : false}
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