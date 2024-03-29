import React from 'react';
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import { 
  Card, 
  Header, 
  Icon, 
  Container, 
  Menu, 
  Sidebar} from 'semantic-ui-react';
import CreateProjectModal from './CreateProjectModal';
import Nav from './Nav'
import API from '../api';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class DesktopContainer extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Container>
          <Nav
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
            logOut={this.props.logOut} 
            userFullName={this.props.userFullName}>
          </Nav>
          {children}
        </Container>
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends React.Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item> {this.props.userFullName ? `Logged in as ${this.props.userFullName}` : ''}</Menu.Item>
            <Menu.Item as='a' style={{ color: '#2185d0'}}onClick={() => { this.props.logOut() }}>Log out</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Container style={{ margin: '0 1em' }}>
                <Menu secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              {children}
              </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = (props) => {

  return (
    <MediaContextProvider>
      <DesktopContainer {...props}>{props.children}</DesktopContainer>
      <MobileContainer {...props}>{props.children}</MobileContainer>
    </MediaContextProvider>
  )
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

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
    return API.User.index()
    .then(data => this.setState({ allUsers: data.data }))
  }

  putProjectsDataInState = () => {
    this.props.toggleLoader(true)
    API.User.available_projects()
    .then(data => {
      this.props.toggleLoader(false)
      this.setState({
        projects: data.data
      })
    }
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
          style={{ height: '15vh' }}
          // description={''}
          // meta={''}
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
    return (
      <>
        <Media at='mobile'>      
            <Card.Group itemsPerRow={1} style={{ marginTop: '1em', marginBottom: '2em' }}>
            {this.createProjectCards()}
              <CreateProjectModal
                projectNameHasError={this.state.newProjectNameHasError}
                trigger={<Card color="blue" header={<span><Icon name="plus" color="blue" /><Header color="blue">Add project</Header></span>}/>}
                propsForCreateProjectModal
                onDropdownChange={this.handleNewMemberSelection}
                dropdownOptions={this.mapAllUsersToDropdownOptions()}
                onProjectNameChange={this.handleProjectNameChange}
                projectName={this.state.projectName}
                onSubmit={this.createNewProject}
                onCancel={this.clearProjectNameField}
              />
            </Card.Group>
        </Media>
        <Media greaterThan='mobile'>
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
            {this.createProjectCards()}
              <CreateProjectModal
                projectNameHasError={this.state.newProjectNameHasError}
                trigger={<Card color="blue" header={<span><Icon name="plus" color="blue" /><Header color="blue">Add project</Header></span>}/>}
                propsForCreateProjectModal
                onDropdownChange={this.handleNewMemberSelection}
                dropdownOptions={this.mapAllUsersToDropdownOptions()}
                onProjectNameChange={this.handleProjectNameChange}
                projectName={this.state.projectName}
                onSubmit={this.createNewProject}
                onCancel={this.clearProjectNameField}
              />
            </Card.Group>
        </Media>
        </>

    )
  }


  render() {
    return (
      <ResponsiveContainer {...this.props}>
        {this.createCardGroup()}
      </ResponsiveContainer>
    )
  }
}
