import React from 'react';
import { Card } from 'semantic-ui-react';

export default class ProjectsList extends React.Component {

  constructor() {
    super();

    this.state = {
      projects: []
    }
  }

  createProjectCards = () => {
    return this.state.projects.map(project => {
      return (
        {
          header: project.attributes.name,
          description: 'Cool project',
          meta: '24/04/1987'
        }
      )
    })
  }

  loadProjectsData = () => {
    return fetch('http://localhost:3001/api/v1/projects')
      .then(res => res.json())
      .then(data =>
        this.setState({
          projects: data.data
        })
      )
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.authenticateMe()
      this.loadProjectsData()
    } else {
      this.props.history.push('/login')
    }
  }
  
 
  cardExampleGroupProps = () => {
    return(
      <Card.Group items={this.createProjectCards()} />
    )
  }

  render() {
    return (
      <div>
      {
        this.cardExampleGroupProps()
      }
      </div>
    )
  }
}