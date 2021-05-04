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
    // page: 'RACITable',
    user_id: 1
  }

  // redirect = (page) => {
  //   this.setState({ page: page })
  // }

  // componentDidMount() {
  //   if (localStorage.token) {
  //     this.redirect('profile')
  //   }
  // }

  render () {
    return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/projects/:id" component={RACITable} /> 
          <Route path="/projects" component={ProjectsList} />
          <Route path="/" component={Login} />
        </Switch>
    )

    // <Container>{
  //   switch(this.state.page) {
  //     case ('login'):
  //       return <Login redirect={this.redirect}/>
  //     case ('projects'):
  //       return <ProjectsList redirect={this.redirect} />
  //     case ('RACITable'):
  //       return <RACITable user_id={this.state.user_id}/>
  //     case ('profile'):
  //       return <Profile />
  //     default:
  //       return <Login redirect={this.redirect}/>
  //   }
  // } 
  // </Container>
  }
}

export default App;
