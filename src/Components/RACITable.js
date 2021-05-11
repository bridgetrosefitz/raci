import React from "react";
import { Icon, Label, Table, Button, Form, Dropdown, Select } from 'semantic-ui-react';
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
      selectedTask: {
        taskId: null,
        taskText: null,
        responsibleUserTasks: [],
        accountableUserTasks: [],
        consultedUserTasks: [],
        informedUserTasks: []
      },
      taskToEdit: {
        taskId: null,
        taskText: null,
        responsibleUserTasks: [],
        accountableUserTasks: [],
        consultedUserTasks: [],
        informedUserTasks: []
      },
      taskToEditUserIds: {
        responsible: [],
        accountable: [],
        consulted: [],
        informed: []
      }
    }
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

  createTeamMemberOptions = () => {
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

  createDropdowns = (task) => {

    return (
      this.state.functions.map(raciFunction => {
        const functionName = raciFunction.attributes.name.toLowerCase()
        const defaultValues = task ? task[functionName].map(userTask => userTask.user_id) : [];
        return (
          <Form.Field>
            <label>{raciFunction.attributes.name}</label>
            <Dropdown
              placeholder='Select team member'
              fluid
              multiple={[3,4].includes(parseInt(raciFunction.id))}
              defaultValue={[3,4].includes(parseInt(raciFunction.id)) ? defaultValues : defaultValues[0]}
              selection
              options={this.createTeamMemberOptions()}
              onChange={(event, data) => {this.handleDropdownChange(data, raciFunction)}}
            />
          </Form.Field>
        )
      })
    )
  }

  handleDropdownChange = (data, raciFunction) => {

    const raciFunctionId = parseInt(raciFunction.id)

    if (raciFunctionId === 1){
      this.setState({
        taskToEditUserIds: {
          ...this.state.taskToEditUserIds,
          responsible: [data.value]
        }
      })
    }
    else if (raciFunctionId === 2) {
      this.setState({
        taskToEditUserIds: {
          ...this.state.taskToEditUserIds,
          accountable: [data.value]
        }
      })
    }
    else if (raciFunctionId === 3) {
      this.setState({
        taskToEditUserIds: {
          ...this.state.taskToEditUserIds,
          consulted: data.value
        }
      })
    }
    else if (raciFunctionId === 4) {
      this.setState({
        taskToEditUserIds: {
          ...this.state.taskToEditUserIds,
          informed: data.value
        }
      })
    }

    

    // if (function_id === 1) {
    //   this.setState({
    //     taskToEdit: {
    //       ...this.state.taskToEdit,
    //       responsibleUserTasks: [
    //         ...this.state.selectedTask.responsibleUserTasks,
    //         {
    //           user_task_id: function_id,
    //           user_id: data.value,
    //           function_id: parseInt(function_id)
    //         }
    //       ]
    //     }
    //   })
    // }
    // else if (function_id === 2) {
    //   this.setState({
    //     selectedTask: {
    //       ...this.state.selectedTask,
    //       accountableUserTask: {
    //         ...this.state.selectedTask.accountableUserTask,
    //         user_id: data.value
    //       }
    //     }
    //   })
    // }
    // else if (function_id === 3) {
    //   this.setState({
    //     selectedTask: {
    //       ...this.state.selectedTask,
    //       consultedUserTask: {
    //         ...this.state.selectedTask.consultedUserTask,
    //         user_id: data.value
    //       }
    //     }
    //   })
    // }
    // else if (function_id === 4) {
    //   this.setState({
    //     selectedTask: {
    //       ...this.state.selectedTask,
    //       informedUserTask: {
    //         ...this.state.selectedTask.informedUserTask,
    //         user_id: data.value
    //       }
    //     }
    //   })
    // }
  }

  handleTextFieldChange = event => {
    this.setState({
      selectedTask: {
        ...this.state.selectedTask,
      taskText: event.target.value}
    })
  }

  createUserTasks = (dataFromTaskCreation) => {
    debugger
    this.state.functions.forEach((raciFunction, index) => {
      let functionId = parseInt(raciFunction.id)
      let teamMemberIds = []
      let taskId = parseInt(dataFromTaskCreation.data.id)

      if (functionId === 1) {
        teamMemberIds = this.state.selectedTask.responsibleUserTasks.map(task => task.user_id)
      }
      else if (functionId === 2) {
        teamMemberIds = this.state.selectedTask.accountableUserTasks.map(task => task.user_id)
      }
      else if (functionId === 3) {
        teamMemberIds = this.state.selectedTask.consultedTasks.map(task => task.user_id)
      }
      else if (functionId === 4) {
        teamMemberIds = this.state.selectedTask.informedUserTasks.map(task => task.user_id)
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
            "user_id": teamMemberIds,
            "task_id": taskId
          })
        })
        .then(this.putProjectDataInState)
      }, index * 1000) // setTimeout is here because SQLite doesn't like handling multiple entries concurrently. I could update to Postgres or other DB at a later time
    })
  }

  updateUserTasks = (dataFromTaskUpdate) => {
    console.log("I am the state, in my present state", this.state)
  }

  handleSubmitOnTaskModal = (event) => {
    event.preventDefault()
    const projectId = this.state.projectId
    const text = this.state.selectedTask.taskText
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

  handleSubmitOnEditTaskModal = (event, text, task) => {
    event.preventDefault()

    const userIdsForUserTasksToCreate = []
    const userIdsforUserTasksToDelete = []
    const selectedTaskUserIds = []
    const taskToEditUserIds = this.state.taskToEditUserIds

    console.log("taskToEditUserIds: ", taskToEditUserIds)

    // this.state.selectedTask.responsible.forEach(userTask => {
    //   selectedTaskUserIds.push(userTask.user_id)
    // })

    // this.state.selectedTask.accountable.forEach(userTask => {
    //   selectedTaskUserIds.push(userTask.user_id)
    // })

    // this.state.selectedTask.consulted.forEach(userTask => {
    //   selectedTaskUserIds.push(userTask.user_id)
    // })

    // this.state.selectedTask.informed.forEach(userTask => {
    //   selectedTaskUserIds.push(userTask.user_id)
    // })

  //   const taskId = task.id
  //   return fetch(`http://localhost:3001/api/v1/tasks/${taskId}`,{
  //     method: 'PUT', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Authorization': `Bearer ${localStorage.token}`
  //     },
  //     body: JSON.stringify({
  //       "text": this.state.selectedTask.taskText,
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => this.updateUserTasks(data))
  }

  putSelectedTaskDataInState = (id) => {
    let taskToPutInState = null

    const taskToEditUserIds = {
      responsible: [],
      accountable: [],
      consulted: [],
      informed: []
    }

    this.state.tasks.forEach(task => {
      if(task.id === id) {
        // Get the task / user task data to put into state

        taskToPutInState = task

        // Get an array of IDs for the user tasks, organized by function

        taskToEditUserIds.responsible = task.responsible.map(user_task => user_task.user_id)
        taskToEditUserIds.accountable = task.accountable.map(user_task => user_task.user_id)
        taskToEditUserIds.consulted = task.consulted.map(user_task => user_task.user_id)
        taskToEditUserIds.informed = task.informed.map(user_task => user_task.user_id)
      }  
    })

    this.setState({
      selectedTask: taskToPutInState,
      taskToEditUserIds: taskToEditUserIds
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
                  createDropdowns={() => this.createDropdowns(task)}
                  putSelectedTaskDataInState={this.putSelectedTaskDataInState}
                  taskText={task.task_name}
                  handleTextFieldChange={this.handleTextFieldChange}
                  handleDropdownChange={this.handleDropdownChange}
                  handleSubmit={this.handleSubmitOnEditTaskModal} />
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
                    taskText={this.state.selectedTask.taskText}
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


// const TestComponent = (props) => {
//   props.fab
//   return (
//     <select onChange={(event, data) => props.onChange(event, data, 2)}>
//       {props.options.map(option => <option value={option.value}>{option.text}</option>)}
//       {/* <option value={2}>hi</option>
//       <option value={3}>yo</option> */}
//     </select>
//   )
// }

// <TestComponent onChange={(hi, fab, gu) => {alert(gu)}} fab='poop' options={[{text: 'hi', value: 2}, {text: 'yo', value: 3}]}/>


{/* <select id="poop"></select>

document.querySelector("#poop").addEventListener("change", (event,poop, gu,sup, pickles) => {

})

myFunciton(event) */}