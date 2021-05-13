import React from 'react';
import { Card, Button } from 'semantic-ui-react';

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
        <Card
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
      {
        this.createCardGroup()
      }
      </div>
    )
  }
}