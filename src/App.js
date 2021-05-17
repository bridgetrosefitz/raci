import './App.css';
import React from 'react';
import RACITable from './Components/RACITable';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import ProjectsList from './Components/ProjectsList';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends React.Component {

  state = {
    user_id: null,
    full_name: null

  }

  authenticateMe = () => {
    fetch(`http://localhost:3001/api/v1/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          user_id: parseInt(data.data.id), 
          full_name: data.data.attributes.full_name
        })})
  }

  logOut = () => {
    localStorage.clear()
    this.props.history.push('/login')
  }

  componentDidMount() {
    if(localStorage.token) {
      this.authenticateMe()
    } else {
      this.props.history.push('/login')
    }
  }

  render () {
    return (
        <Switch>
          <Route 
            path="/login" 
            render={routerProps => <Login {...routerProps} user_id={this.state.user_id}/> } />
          <Route 
            path="/signup" 
            render={routerProps => <SignUp {...routerProps}/>} />
          <Route 
            path="/projects/:id" 
            render={routerProps => <RACITable {...routerProps} authenticateMe={this.authenticateMe} userId={this.state.user_id} userFullName={this.state.full_name} logOut={this.logOut}/>} />
          <Route 
            path="/projects" 
            render={routerProps => <ProjectsList {...routerProps} authenticateMe={this.authenticateMe} userId={this.state.user_id} userFullName={this.state.full_name} logOut={this.logOut} />} />
          <Route 
            path="/" 
            render={routerProps => <RACITable {...routerProps} authenticateMe={this.authenticateMe} userId={this.state.user_id} userFullName={this.state.full_name} logOut={this.logOut} />} />
        </Switch>
    )

  }
}

export default withRouter(App);
