import React from 'react';
import { Card, Button, Header, Icon, Container, Menu } from 'semantic-ui-react';
import CreateProjectModal from './CreateProjectModal';
import Nav from './Nav'
import API from '../api';

export default class ProjectsList extends React.Component {

  constructor() {
    super();

    this.state = {
      projects: [],
      allUsers: [],
      projectName: '',
      newMembersToAdd: [],
      newProjectNameHasError: false,
    }
  }

  putAllUsersDataInState = () => {
    API.User.index()
    .then(data => this.setState({ allUsers: data.data }))
  }

  putProjectsDataInState = () => {
    API.Project.index()
    .then(data => {
      this.setState({
        projects: data.data
      })}
    )
  }

  handleNewMemberSelection = (event, data) => {
    this.setState({ newMembersToAdd: data.value })
  }

  handleProjectNameChange = (event) => {

    const projectName = event.target.value;
    // if (projectName.length < 2) {
    //   this.setState({newProjectNameHasError: true})
    // } else {
    //   this.setState({ newProjectNameHasError: false })
    // }
    this.setState({ projectName: projectName})
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
      API.Membership.create(memberId, projectId)
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
          // description={'Cool project'}
          // meta={'24/04/1987'}
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
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
      {this.createProjectCards()}
        <CreateProjectModal
          projectNameHasError={this.state.newProjectNameHasError}
          trigger={<Card color="blue" header={<span><Icon name="plus" color="blue" /><Header color="blue">Add project</Header></span>}/>}
          onDropdownChange={this.handleNewMemberSelection}
          dropdownOptions={this.mapAllUsersToDropdownOptions()}
          onProjectNameChange={this.handleProjectNameChange}
          projectName={this.state.projectName}
          onSubmit={this.createNewProject}
          onCancel={this.clearProjectNameField}
        />
      </Card.Group>
    )
  }

  render() {
    return (
      <Container>
        <Nav logOut={this.props.logOut} userFullName={this.props.userFullName}/>
        {this.createCardGroup()}
      </Container>
    )
  }
}