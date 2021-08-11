import { createMedia } from '@artsy/fresnel'
import PhotoSlideshow from './PhotoSlideshow'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Card
} from 'semantic-ui-react'

const appScreenshots = ['/app-screenshots/raci-1-project-and-tasks-page.png', '/app-screenshots/raci-2-signup.png', '/app-screenshots/raci-3-login.png', '/app-screenshots/raci-4-login-error.png', '/app-screenshots/raci-5-projects-page.png', '/app-screenshots/raci-6-edit-project.png', '/app-screenshots/raci-7-new-task.png']

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const raciDefinitions = [
  {
    header: 'Responsible',
    description:
      'You are hands-on doing the work',
    color: 'blue',
  },
  {
    header: 'Accountable',
    description:
      'You are answerable for timing and quality',
    color: 'blue'
  },
  {
    header: 'Consulted',
    description:
      'Your input is necessary',
    color: 'blue'
  },
  {
    header: 'Informed',
    description:
      'You need updates to do your own work well',
    color: 'blue'
  },
]

const HomepageHeading = (props) => {
  return(
    <Container text >
      <Header
        as='h1'
        content='RACI'
        inverted
        style={{
          fontSize: props.mobile ? '2em' : '4em',
          fontWeight: 'bold',
          marginBottom: 0,
          marginTop: props.mobile ? '1em' : '1em',
          color: '#2185d0'
        }}
      />
      <Header
        as='h1'
        content='Do only what you need to. Know the rest is getting done.'
        inverted
        style={{
          fontSize: props.mobile ? '1.5em' : '3em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: props.mobile ? '0.2em' : '0.5em',
        }}
      />
      <Button 
        onClick={() => {
          props.history.push('/signup')
          }
        }
        style={{
          marginTop: props.mobile ? '2em' : '2.2em'
        }}
        primary size={props.mobile ? 'medium' : 'huge'}>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

 
  return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 600, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item position='right'>
                  <Button onClick={() => { this.props.history.push('/login') }} as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button onClick={() => { this.props.history.push('/signup') }} as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading {...this.props}/>
          </Segment>
        </Visibility>
        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' onClick={() => { this.props.history.push('/login') }}>Log in</Menu.Item>
            <Menu.Item as='a' onClick={() => { this.props.history.push('/signup') }}>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading {...this.props} mobile />
            </Segment>
            {children}
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

  return(
    <MediaContextProvider>
      <DesktopContainer {...props}>{props.children}</DesktopContainer>
      <MobileContainer {...props}>{props.children}</MobileContainer>
    </MediaContextProvider>
  )
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default class LandingPage extends React.Component  {

  componentDidMount() {
    this.props.toggleLoader(false)
  }

  render() {

    return(
      <ResponsiveContainer {...this.props}>
        <Segment style={{ padding: '2em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Segment style={{ padding: '0em' }} vertical>
              <Grid.Row>
                <Media at='mobile'>
                  <Card.Group 
                    centered 
                    items={raciDefinitions} 
                    style={{ 
                      flexWrap: 'wrap', 
                      margin: '2em auto 3em auto', 
                      maxWidth: '70%'}} />
                </Media>  
                <Media greaterThan='mobile'>
                  <Card.Group
                    centered
                    items={raciDefinitions}
                    style={{
                      flexWrap: 'nowrap',
                      margin: '6em auto 3em auto',
                      maxWidth: '70%'
                    }} />
                </Media>
              </Grid.Row>
            </Segment>
              <Grid.Row>              
              <Grid.Column width={9}>
                <Header as='h3' style={{ fontSize: '2em', marginTop: '2em' }}>
                  The RACI Framework
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  RACI helps:
                  <ol>
                    <li>reduce the risk of low quality work due to murky accountability</li>
                    <li>make sure the right people have input on tasks (and gives team members authority to make decisions without input!)</li>
                    <li>prompt conversations about workload and capacity</li>
                  </ol>
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  How it works
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <ul>
                    <li>Create a project, and define tasks for that project</li>
                    <li>Show which team members are R, A, C, or I for each task</li>
                    <li>Team members can flag tasks when a scoping or workload issue arises</li>
                  </ul>
                </p>
              </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <PhotoSlideshow photos={appScreenshots} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button  
                  onClick={() => {
                    this.props.history.push('/signup')
                  }}
                  style={{ margin: '3em 0' }}
                  size='huge'>
                  Get started
                  <Icon name='right arrow' />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* Footer */}
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header inverted as='h4' content='© 2021 Bridget Fitzgerald. I ♥ RACI.' />
                  <List link inverted>
                    <List.Item as='a' href='https://github.com/bridgetrosefitz/raci' target='_blank'>View the code</List.Item>
                    <List.Item as='a' href='mailto:bridgetrosefitz@gmail.com' target='_blank'>Contact</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    )
  }
}