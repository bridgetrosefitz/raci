import React from "react";
import { useTable } from 'react-table';
import { Icon, Label, Menu, Tab, Table, Button, Dropdown, Modal } from 'semantic-ui-react';
import TaskModal from './TaskModal';

export default class RACITable extends React.Component {
    constructor() {
      super();

      this.state = {
          projectId: '',
          projectName: '',
          functions: [],
          tasks: [],
          creator: {},
          members: [],
          newTask: {
            taskText: '',
            responsibleUserId: '',
            accountableUserId: '',
            consultedUserId: '',
            informedUserId: ''
          }
      }
    }

  teamMembers = () => {
    return this.state.members.map(member => {
      return (
        {
          key: member.first_name,
          text: member.first_name,
          value: member.id
        }
      )
    })   
  }

  handleTextFieldChange = event => {
    this.setState({
      newTask: {
        ...this.state.newTask,
      taskText: event.target.value}
    })
  }

  handleDropdownChange = (event, data, raciFunction) => {
    if (raciFunction.id === "1") {
      this.setState({
        newTask: {
          ...this.state.newTask,
          responsibleUserId: data.value
        }
      })
    }
    else if (raciFunction.id === "2") {
      this.setState({
        newTask: {
          ...this.state.newTask,
          accountableUserId: data.value
        }
      })
    }
    else if (raciFunction.id === "3") {
      this.setState({
        newTask: {
          ...this.state.newTask,
          consultedUserId: data.value
        }
      })
    }
    else if (raciFunction.id === "4") {
      this.setState({
        newTask: {
          ...this.state.newTask,
          informedUserId: data.value
        }
      })
    }
  }

  createUserTasks = (dataFromTaskCreation) => {
    this.state.functions.forEach((raciFunction, index) => {
      let functionId = parseInt(raciFunction.id)
      let teamMemberId
      let taskId = parseInt(dataFromTaskCreation.data.id)

      if (functionId === 1) {
        teamMemberId = this.state.newTask.responsibleUserId
      }
      else if (functionId === 2) {
        teamMemberId = this.state.newTask.accountableUserId
      }
      else if (functionId === 3) {
        teamMemberId = this.state.newTask.consultedUserId
      }
      else if (functionId === 4) {
        teamMemberId = this.state.newTask.informedUserId
      }

      setTimeout(() => {
        fetch('http://localhost:3001/api/v1/user_tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            "function_id": functionId,
            "user_id": teamMemberId,
            "task_id": taskId
          })
        })
        .then(this.putProjectDataInState)
      }, index * 1000) // setTimeout is here because SQLite doesn't like handling multiple entries concurrently. I could update to Postgres or other DB at a later time
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const projectId = this.state.projectId
    const text = this.state.newTask.taskText
    return fetch(`http://localhost:3001/api/v1/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "text": text,
        "project_id": projectId
      })
    })
      .then(res => res.json())
      .then(data => this.createUserTasks(data))
  }

  putProjectDataInState = () => {
    fetch('http://localhost:3001/api/v1/projects/1')
      .then(res => res.json())
      .then(data => this.setState({
        projectId: data.data.id,
        projectName: data.data.attributes.name,
        tasks: data.data.attributes.tasks,
        creator: data.data.attributes.creator,
        members: data.data.attributes.members
      }))

    fetch('http://localhost:3001/api/v1/functions')
      .then(res => res.json())
      .then(data => this.setState({
        functions: data.data
      }
      ))
  } 

    componentDidMount() {
      this.putProjectDataInState()
    }

    render() {
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
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan='4'>
                  <TaskModal 
                    projectId={this.state.projectId}
                    raciFunctions={this.state.functions}
                    teamMembers={this.teamMembers()}
                    taskText={this.state.newTask.taskText}
                    handleTextFieldChange={this.handleTextFieldChange}
                    handleDropdownChange={this.handleDropdownChange}
                    handleSubmit={this.handleSubmit} />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      )
    }

}
