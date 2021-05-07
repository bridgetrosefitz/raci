import React from "react";
import { Icon, Label, Table, Button, Form, Dropdown } from 'semantic-ui-react';
import TaskModal from './TaskModal';
import EditTaskModal from './EditTaskModal';
import { Link } from 'react-router-dom';

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

  createTeamMemberOptions = () => {
    console.log()
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

  createDropdowns = () => {
    return (
      this.state.functions.map(raciFunction => {
        return (
          <Form.Field>
            <label>{raciFunction.attributes.name}</label>
            <Dropdown
              placeholder='Select team member'
              fluid
              function_id={raciFunction.id}
              selection
              options={this.createTeamMemberOptions()}
              onChange={(e, d) => this.handleDropdownChange(e, d, raciFunction)}
            />
          </Form.Field>
        )
      })
    )
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
            'Authorization': `Bearer ${localStorage.token}`
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

  handleSubmitOnTaskModal = (event) => {
    event.preventDefault()
    const projectId = this.state.projectId
    const text = this.state.newTask.taskText
    return fetch(`http://localhost:3001/api/v1/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
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
    fetch('http://localhost:3001/api/v1/projects/1', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        projectId: data.data.id,
        projectName: data.data.attributes.name,
        tasks: data.data.attributes.tasks,
        creator: data.data.attributes.creator,
        members: data.data.attributes.members
      }))

    fetch('http://localhost:3001/api/v1/functions', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        functions: data.data
      }
      ))
  } 

  putSelectedTaskDataInState = (id) => {
    fetch(`http://localhost:3001/api/v1/tasks/${id}`,
    {
      headers: {
        "Authorization" : `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        newTask: {
          taskText: data.data.attributes.text,
        }
      })
      data.data.attributes.user_tasks.forEach(user_task => {
        if (user_task.function_id === 1) {
          this.setState(previousState => ({
            newTask: {
              ...previousState.newTask,
              responsibleUserId: user_task.user_id
            }
          }))
        }
        else if (user_task.function_id === 2) {
          this.setState(previousState => ({
            newTask: {
              ...previousState.newTask,
              accountableUserId: user_task.user_id
            }
          }))
        }
        else if (user_task.function_id === 3) {
          this.setState(previousState => ({
            newTask: {
              ...previousState.newTask,
              consultedUserId: user_task.user_id
            }
          }))
        }
        else if (user_task.function_id === 4) {
          this.setState(previousState => ({
            newTask: {
              ...previousState.newTask,
              informedUserId: user_task.user_id
            }
          }))
        }
      })
    })
  }

  componentDidMount() {
      if (localStorage.token) {
        this.props.authenticateMe()
        this.putProjectDataInState()
      } else {
        this.props.history.push('/login')
      }
  }

    render() {
      console.log(this.props)
      return(
        <div>
          <Button
            onClick={this.props.logOut}
            floated='right'
          >Log out</Button>
          <h1>{this.state.projectName}</h1>
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
                <Table.Cell>{task.task_name}
                <EditTaskModal
                  task={task}
                  projectId={this.state.projectId}
                  createDropdowns={this.createDropdowns}
                  putSelectedTaskDataInState={this.putSelectedTaskDataInState}
                  taskText={this.state.newTask.taskText}
                  handleTextFieldChange={this.handleTextFieldChange}
                  handleDropdownChange={this.handleDropdownChange}
                  handleSubmitOnTaskModal={this.handleSubmitOnTaskModal} />
                </Table.Cell>
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
                    createDropdowns={this.createDropdowns}
                    taskText={this.state.newTask.taskText}
                    handleTextFieldChange={this.handleTextFieldChange}
                    handleDropdownChange={this.handleDropdownChange}
                    handleSubmit={this.handleSubmitOnTaskModal} />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      )
    }

}
