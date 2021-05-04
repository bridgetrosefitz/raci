import React from 'react';

export default class ProjectsList extends React.Component {

  constructor() {
    super();

    this.state = {
      projects: []
    }
  }

  projectNames = () => {
    return this.state.projects.map(project => {
      return (
        {
          project_name: project.attributes.name,
        }
      )
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/v1/projects')
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //       projects: data.data
  //       })
  //     )
  // }

  render() {
    return (
      <div>
      Hi I'm the ProjectsList page
      {
        this.projectNames()
      }
      </div>
    )
  }
}