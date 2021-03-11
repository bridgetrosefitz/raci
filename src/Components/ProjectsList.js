import React from 'react';

export default class ProjectsList extends React.Component {

  constructor() {
    super();

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/projects')
      .then(res => res.json())
      .then(data => this.setState({
        projects: data.data
      }))
  }

  render() {
    return (
      <div>{
        `Your projects`
      }</div>
    )
  }
}