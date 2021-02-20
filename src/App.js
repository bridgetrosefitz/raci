import './App.css';
import React from 'react';
import RACITable from './Components/RACITable';
import Login from './Components/Login';
import Profile from './Components/Profile';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

  state = {
    page: '',
    user_id: ''
  }

  redirect = (page) => {
    this.setState({ page: page })
  }

  componentDidMount() {
    if (localStorage.token) {
      this.redirect('profile')
    }
  }

  render () {
    // <Container>{
    switch(this.state.page) {
      case ('login'):
        return <Login redirect={this.redirect}/>
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
