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

  }

  authenticateMe() {
    fetch(`http://localhost:3001/api/v1/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ user_id: data.id }))
  }

  componentDidMount() {
    if(localStorage.token) {
      this.authenticateMe()
    } else {
      this.props.history.push('/signup')
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
            path="/profile" 
            render={routerProps => <Profile {...routerProps} user_id={this.state.user_id} /> } />
          <Route path="/projects/:id" component={RACITable} /> 
          <Route path="/projects" component={ProjectsList} />
          <Route path="/" component={Login} />
        </Switch>
    )

  }
}

export default withRouter(App);
