import './App.css';
import React from 'react';
import RACITable from './components/RACITable';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProjectsList from './components/ProjectsList';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import API from './api'

class App extends React.Component {

  state = {
    user_id: null,
    full_name: null

  }

  authenticateMe = () => {
    API.User.profile()
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
    if (localStorage.token) {
      this.authenticateMe()
    } else {
      if (this.props.location.pathname !== '/signup') {
        this.props.history.push('/login')
      }
    }

  }

  render () {
    return (
      <div>
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
            render={routerProps => <ProjectsList {...routerProps} authenticateMe={this.authenticateMe} userId={this.state.user_id} userFullName={this.state.full_name} logOut={this.logOut} />} />
        </Switch>
      </div>
    )

  }
}

export default withRouter(App);
