import './App.css';
import React from 'react';
import RACITable from './components/RACITable';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProjectsList from './components/ProjectsList';
import LandingPage from './components/LandingPage'; 
import { Dimmer, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import API from './api'

class App extends React.Component {

  state = {
    loaderIsActive: true,
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

  toggleLoader = (trueOrFalse) => {
    this.setState({loaderIsActive: trueOrFalse})
  }
  
  componentDidMount() {
    if (localStorage.token) {
      this.authenticateMe()
    } else if (this.props.location.pathname !== '/' || this.props.location.pathname === '/signup' ) {
      this.props.history.push('/login')
      }
    }

  redirectToProjectsIndexPage = () => {
    this.props.history.push(`/projects`)
  }

  
  render () {

    return (
      <div>
        <Dimmer inverted active={this.state.loaderIsActive} >
          <Loader inverted content='Loading' />
        </Dimmer>
        <Switch>
          <Route 
            path="/login" 
            render={routerProps => <Login 
                                      {...routerProps} 
                                      authenticateMe={this.authenticateMe} 
                                      loaderIsActive={this.state.loaderIsActive}
                                      toggleLoader={this.toggleLoader}
                                      user_id={this.state.user_id}/>} />
          <Route 
            path="/signup" 
            render={routerProps => <SignUp 
                                    {...routerProps}
                                    loaderIsActive={this.state.loaderIsActive}
                                    toggleLoader={this.toggleLoader}/>} />
          <Route 
            path="/projects/:id" 
            render={routerProps => <RACITable 
                                      {...routerProps} 
                                      authenticateMe={this.authenticateMe}
                                      loaderIsActive={this.state.loaderIsActive}
                                      toggleLoader={this.toggleLoader}
                                      userId={this.state.user_id} 
                                      onBack={this.redirectToProjectsIndexPage}
                                      backText={'Back to Projects'}
                                      userFullName={this.state.full_name} 
                                      logOut={this.logOut}/>} />
          <Route 
            path="/projects" 
            render={routerProps => <ProjectsList 
                                      {...routerProps} 
                                      authenticateMe={this.authenticateMe}
                                      loaderIsActive={this.state.loaderIsActive} 
                                      toggleLoader={this.toggleLoader}
                                      userId={this.state.user_id} 
                                      userFullName={this.state.full_name} 
                                      logOut={this.logOut} />} />
          <Route 
            path="/"
            render={routerProps => <LandingPage
                                      {...routerProps} 
                                      authenticateMe={this.authenticateMe} 
                                      loaderIsActive={this.state.loaderIsActive}
                                      toggleLoader={this.toggleLoader}
                                      userId={this.state.user_id} 
                                      userFullName={this.state.full_name} 
                                      logOut={this.logOut} />} />
        </Switch>
      </div>
    )

  }
}

export default withRouter(App);
