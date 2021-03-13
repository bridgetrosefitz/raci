import './App.css';
import React from 'react';
import RACITable from './Components/RACITable';
import Login from './Components/Login';
import Profile from './Components/Profile';
import ProjectsList from './Components/ProjectsList';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

  state = {
    page: 'projects',
    user_id: ''
  }

  redirect = (page) => {
    this.setState({ page: page })
  }

  // componentDidMount() {
  //   if (localStorage.token) {
  //     this.redirect('profile')
  //   }
  // }

  render () {
    // <Container>{
    switch(this.state.page) {
      case ('login'):
        return <Login redirect={this.redirect}/>
      case ('projects'):
        return <ProjectsList redirect={this.redirect} />
      case ('RACITable'):
        return <RACITable user_id={this.state.user_id}/>
      case ('profile'):
        return <Profile />
      default:
        return <Login redirect={this.redirect}/>
    }
  } 
  // </Container>
}

export default App;
