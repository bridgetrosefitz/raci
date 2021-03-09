import React from "react";
import { useTable } from 'react-table';
import { Icon, Label, Menu, Tab, Table, Button, Dropdown } from 'semantic-ui-react';

export default class RACITable extends React.Component {
    constructor() {
      super();

      this.state = {
        projectName: '',
        tasks: [],
        creator: {},
        members: []
      }
    }
    teamMembers = () => {
      return this.state.members.map(member => {
        return (
          {
            key: member.first_name,
            text: member.first_name,
            value: member.first_name,
          }
        )
      })   
      }

      // {
      //   key: 'Jenny Hess',
      //   text: 'Jenny Hess',
      //   value: 'Jenny Hess',
      //   image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
      // }

    componentDidMount() {
      fetch('http://localhost:3001/api/v1/projects/1')
      .then(res => res.json())
        .then(data => this.setState({ 
          projectName: data.data.attributes.name,
          tasks: data.data.attributes.tasks,
          creator: data.data.attributes.creator, 
          members: data.data.attributes.members
        }))
    }

    render() {
      console.log(this.state)
      return(
        <div>
          <h1>{this.state.projectName}</h1>
          <Button>Edit project</Button>
          <Table celled> 
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width='four'>Task</Table.HeaderCell>
                <Table.HeaderCell width='two'>Responsible</Table.HeaderCell>
                <Table.HeaderCell width='two'>Accountable</Table.HeaderCell>
                <Table.HeaderCell width='two'>Consulted</Table.HeaderCell>
                <Table.HeaderCell width='two'>Informed</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.state.tasks.map(task => {
              return (<Table.Row>
                <Table.Cell>{task.task_name}</Table.Cell>
                <Table.Cell>{
                  task.responsible.map((user_task, i) => {
                    return (<Label>
                      {user_task.user_full_name}
                      <Icon name='delete' />
                    </Label>)
                  } )}
                </Table.Cell>
                <Table.Cell>{
                    task.accountable.map((user_task, i) => {
                      return (<Label>
                        {user_task.user_full_name}
                        <Icon name='delete' />
                      </Label>)
                  } )}
                </Table.Cell>
                <Table.Cell>{
                  task.consulted.map((user_task, i) => {
                    return (<Label>
                      {user_task.user_full_name}
                      <Icon name='delete' />
                    </Label>)
                  })}
                </Table.Cell>
                <Table.Cell>{
                  task.informed.map((user_task, i) => {
                    return (<Label>
                      {user_task.user_full_name}
                      <Icon name='delete' />
                    </Label>)
                  })}
                </Table.Cell>
              </Table.Row>)
            })}
            <Table.Row>
               <Table.Cell>
                  <button class="ui icon button" onClick={this.teamMembers}><i aria-hidden="true" class="plus square icon"></i></button>
                Create task
              </Table.Cell>
              <Table.Cell >
                <Dropdown
                    placeholder='Select team member'
                    fluid
                    selection
                    options={this.teamMembers()}
                  />
              </Table.Cell>
              <Table.Cell>
                <Dropdown
                  placeholder='Select team member'
                  fluid
                  selection
                  options={this.teamMembers()}
                />
              </Table.Cell>
              <Table.Cell>
                <Dropdown
                  placeholder='Select team member'
                  fluid
                  selection
                  options={this.teamMembers()}
                />
              </Table.Cell>
              <Table.Cell>
                <Dropdown
                  placeholder='Select team member'
                  fluid
                  selection
                  options={this.teamMembers()}
                />
              </Table.Cell>
            </Table.Row>
          </Table>
        </div>
      )
    }

}
