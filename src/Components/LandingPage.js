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
} from 'semantic-ui-react'

const appScreenshots = ['/app-screenshots/raci-1-project-and-tasks-page.png', '/app-screenshots/raci-2-signup.png', '/app-screenshots/raci-3-login.png', '/app-screenshots/raci-4-login-error.png', '/app-screenshots/raci-5-projects-page.png', '/app-screenshots/raci-6-edit-project.png', '/app-screenshots/raci-7-new-task.png']

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = (props, {mobile}) => {
  return(
    <Container text>
      <Header
        as='h1'
        content='RACI'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'bold',
          marginBottom: 0,
          marginTop: mobile ? '1em' : '2em',
          color: '#2185d0'
        }}
      />
      <Header
        as='h1'
        content='Do only what you need to. Know the rest is getting done.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '3em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '0.2em' : '0.5em',
        }}
      />
      <Button 
        onClick={() => {
          props.history.push('/signup')
          }
        }
        style={{
          marginTop: mobile ? '2em' : '2.2em'
        }}
        primary size={mobile ? 'medium' : 'huge'}>
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
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
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
                  <Button onClick={() => {this.props.history.push('/signup')}} as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
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
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
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
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
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

const ResponsiveContainer = (props, { children }) => {

  return(
    <MediaContextProvider>
      <DesktopContainer {...props}>{children}</DesktopContainer>
      <MobileContainer {...props}>{children}</MobileContainer>
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
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  The RACI Framework
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Use the Responsible-Accountable-Consulted-Informed framework to make team roles extremely clear.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  How it works
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <PhotoSlideshow photos={appScreenshots} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button  
                  style={{ marginTop: '2em' }}
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
                    <List.Item as='a'>View the code</List.Item>
                    <List.Item as='a'>Contact</List.Item>
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