import React from 'react';

export default class Profile extends React.Component {

  state = {
    first_name: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/profile`, {
      headers: {
        'Authorization' : `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => this.setState({first_name: data.first_name}))
  }
  render() {
    return(
      <div>{
        this.props.first_name? `Welcome ${this.props.first_name}` :
        `Getting your profile info`
      }</div>
    )
  }
}