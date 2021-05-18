import React from 'react';
import { Card, Button, Header } from 'semantic-ui-react';
import CreateProjectModal from './CreateProjectModal';
import API from '../api';

export default class ProjectsList extends React.Component {

  constructor() {
    super();

    this.state = {
      projects: [],
      allUsers: [],
      projectName: '',
      newMembersToAdd: [],
    }
  }

  putAllUsersDataInState = () => {
    fetch(`http://localhost:3001/api/v1/users`, {
      headers: {
        'Authorization' : `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ allUsers: data.data }))
  }

  putProjectsDataInState = () => {
    return fetch('http://localhost:3001/api/v1/projects', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          projects: data.data
        })
      )
  }

  handleNewMemberSelection = (event, data) => {
    this.setState({ newMembersToAdd: data.value })
  }

  handleProjectNameChange = (event) => {
    this.setState({ projectName: event.target.value })
  }

  mapAllUsersToDropdownOptions = () => {
    return this.state.allUsers.map(user => ({ 
      key: user.id, 
      text: user.attributes.full_name, 
      value: user.id }))
  }

  clearProjectNameField = () => {
    this.setState({projectName: ""})
  }

  createNewMembers = (projectId) => {
    this.state.newMembersToAdd.forEach((memberId, index) => {
        fetch(`http://localhost:3001/api/v1/memberships`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
          },
          body: JSON.stringify({
            user_id: memberId,
            project_id: projectId
          })
        })
    })
  }

  createNewProject = () => {
    API.Project.create({name: this.state.projectName, creator_id: this.props.userId})
      .then(data => {
        const projectId = data.data.id
        this.createNewMembers(projectId)
      })
      .then(this.putProjectsDataInState)
  }

  createProjectCards = () => {
    return this.state.projects.map((project, index) => {

      return (
        <Card
          key={index}
          header={project.attributes.name}
          description={'Cool project'}
          meta={'24/04/1987'}
          onClick={() => {
            const projectId = project.id
            this.redirectToProjectPage(projectId)}
           }>
        </Card>
      )
    })
  }

  redirectToProjectPage = (projectId) => {
    this.props.history.push(`/projects/${projectId}`)
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.authenticateMe()
      this.putProjectsDataInState()
      this.putAllUsersDataInState()
    } else {
      this.props.history.push('/login')
    }
  }
  
 
  createCardGroup = () => {
    return(
      <Card.Group>
      {this.createProjectCards()}
      </Card.Group>
    )
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.props.logOut}
          floated='right'
        >Log out</Button>
        <Header
          as="h4"
          floated='right'
        >{`Logged in as ${this.props.userFullName}`}</Header>
      {
        this.createCardGroup()
      }
        <CreateProjectModal 
          onDropdownChange={this.handleNewMemberSelection} 
          dropdownOptions={this.mapAllUsersToDropdownOptions()} 
          onProjectNameChange={this.handleProjectNameChange}
          projectName={this.state.projectName}
          onSubmit={this.createNewProject}
          onCancel={this.clearProjectNameField}
          />
      </div>
    )
  }
}