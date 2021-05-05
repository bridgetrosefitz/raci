import './App.css';
import React from 'react';
import RACITable from './Components/RACITable';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import ProjectsList from './Components/ProjectsList';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  state = {
    user_id: 1
  }

  componentDidMount() {
    if(localStorage.token) {
      //Set user_id
    }
  }

  render () {
    return (
        <Switch>
          <Route 
            path="/login" 
            render={routerProps => <Login {...routerProps} user_id={this.state.user_id}/> } />
          <Route path="/signup" component={SignUp} />
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

export default App;
