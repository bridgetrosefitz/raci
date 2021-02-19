import './App.css';
import React from 'react';
import RACITable from './Components/RACITable';
import Login from './Components/Login';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

  state = {
    page: 'login'
  }

  render () {
    // <Container>{
    switch(this.state.page) {
      case ('login'):
        return <Login />
      case ('RACITable'):
        return <RACITable/>
      default:
        return <Login/>
    }
  }
  // </Container>
}

export default App;
