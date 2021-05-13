import React from "react";
import { Icon, Label, Table, Button, Form, Dropdown, Select, Message } from 'semantic-ui-react';
import TaskModal from './TaskModal';
import EditTaskModal from './EditTaskModal';
import { Link } from 'react-router-dom';

export default class RACITable extends React.Component {
  constructor() {
    super();

    this.state = {
      hideTopMessage: true,
      topMessage: {
        header: '',
        message: '',
      },
      projectId: '',
      projectName: '',
      functions: [],
      tasks: [],
      creator: {},
      members: [],
      selectedTask: {
        taskId: null,
        taskText: null,
        responsible: [],
        accountable: [],
        consulted: [],
        informed: []
      },
      taskToCreateUserIds: {
        responsible: [],
        accountable: [],
        consulted: [],
        informed: []
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
    const projectId = this.props.match.params.id
    fetch(`http://localhost:3001/api/v1/projects/${projectId}`, {
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

  createDropdownsForEditModal = (task) => {

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
              onChange={(event, data) => {this.handleDropdownChangeForEditModal(data, raciFunction)}}
            />
          </Form.Field>
        )
      })
    )
  }

  createDropdownsForCreateModal = (task) => {

    return (
      this.state.functions.map(raciFunction => {
        const functionName = raciFunction.attributes.name.toLowerCase()
        return (
          <Form.Field>
            <label>{raciFunction.attributes.name}</label>
            <Dropdown
              placeholder='Select team member'
              fluid
              multiple={[3, 4].includes(parseInt(raciFunction.id))}
              selection
              options={this.createTeamMemberOptions()}
              onChange={(event, data) => { this.handleDropdownChangeForCreateModal(data, raciFunction) }}
            />
          </Form.Field>
        )
      })
    )
  }

  handleDropdownChangeForCreateModal = (data, raciFunction) => {

    const raciFunctionId = parseInt(raciFunction.id)

    if (raciFunctionId === 1) {
      this.setState({
        taskToCreateUserIds: {
          ...this.state.taskToCreateUserIds,
          responsible: [data.value]
        }
      })
    }
    else if (raciFunctionId === 2) {
      this.setState({
        taskToCreateUserIds: {
          ...this.state.taskToCreateUserIds,
          accountable: [data.value]
        }
      })
    }
    else if (raciFunctionId === 3) {
      this.setState({
        taskToCreateUserIds: {
          ...this.state.taskToCreateUserIds,
          consulted: data.value
        }
      })
    }
    else if (raciFunctionId === 4) {
      this.setState({
        taskToCreateUserIds: {
          ...this.state.taskToCreateUserIds,
          informed: data.value
        }
      })
    }
  }

  handleDropdownChangeForEditModal = (data, raciFunction) => {

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
  }

  handleTextFieldChange = event => {
    this.setState({
      selectedTask: {
        ...this.state.selectedTask,
      task_name: event.target.value}
    })
  }

  createUserTasks = (dataFromTaskCreation) => {

    const taskId = parseInt(dataFromTaskCreation.data.id)

    const userTasksToCreate = []

    const userIdsForUserTasksToCreate = this.state.taskToCreateUserIds

    userIdsForUserTasksToCreate.responsible.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 1,
          user_id: userId
        }
      )
    })

    userIdsForUserTasksToCreate.accountable.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 2,
          user_id: userId
        }
      )
    })

    userIdsForUserTasksToCreate.consulted.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 3,
          user_id: userId
        }
      )
    })

    userIdsForUserTasksToCreate.informed.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 4,
          user_id: userId
        }
      )
    })
      // Send the now-complete userTasks to the server for creation

    userTasksToCreate.forEach((userTask, index) => {
        setTimeout(() => {
          fetch('http://localhost:3001/api/v1/user_tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(userTask)
          })
            .then(this.putProjectDataInState)
        }, index * 1000) // setTimeout is here because SQLite doesn't like handling multiple entries concurrently. I could update to Postgres or other DB at a later time
      })
      
      this.setState({
        userTasksToCreate: []
      })
}

  handleSubmitOnTaskModal = (event) => {
    event.preventDefault()
    const projectId = this.state.projectId
    const text = this.state.selectedTask.task_name
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

  handleSubmitOnEditTaskModal = (event, task) => {
    event.preventDefault()

    const userIdsForUserTasksToCreate = {
      responsible: [],
      accountable: [],
      consulted: [],
      informed: []
    }

    const userIdsForUserTasksToDelete = {
      responsible: [],
      accountable: [],
      consulted: [],
      informed: []
    }

    const selectedTaskUserIds = {
      responsible: [],
      accountable: [],
      consulted: [],
      informed: []
    }

    const userTaskIdsForUserTasksToDelete = {
      responsible: [],
      accountable: [],
      consulted: [],
      informed: []
    }
    
    // Assign data from state to our little variable here, for convenience

    const taskToEditUserIds = this.state.taskToEditUserIds

    // Parse data out of selectedTask (i.e. the user_ids for user_tasks already in the database) 
    // into the same shape as taskToEditUserIds

    selectedTaskUserIds.responsible = this.state.selectedTask.responsible.map(user_task => {
      return(user_task.user_id)
    })

    selectedTaskUserIds.accountable = this.state.selectedTask.accountable.map(user_task => {
      return (user_task.user_id)
    })

    selectedTaskUserIds.consulted = this.state.selectedTask.consulted.map(user_task => {
      return (user_task.user_id)
    })

    selectedTaskUserIds.informed = this.state.selectedTask.informed.map(user_task => {
      return (user_task.user_id)
    })

    // For each function, do a diff to find the user_ids which have been removed 
    // from selectedTask (i.e. those we need to delete)

    userIdsForUserTasksToDelete.responsible = selectedTaskUserIds.responsible.filter(n => !taskToEditUserIds.responsible.includes(n))
    userIdsForUserTasksToDelete.accountable = selectedTaskUserIds.accountable.filter(n => !taskToEditUserIds.accountable.includes(n))
    userIdsForUserTasksToDelete.consulted = selectedTaskUserIds.consulted.filter(n => !taskToEditUserIds.consulted.includes(n))
    userIdsForUserTasksToDelete.informed = selectedTaskUserIds.informed.filter(n => !taskToEditUserIds.informed.includes(n))

    // For each function, do a diff to find the user_ids which have been added 
    // to selectedTask (i.e. those we need to create)
    
    userIdsForUserTasksToCreate.responsible = taskToEditUserIds.responsible.filter(n => !selectedTaskUserIds.responsible.includes(n))
    userIdsForUserTasksToCreate.accountable = taskToEditUserIds.accountable.filter(n => !selectedTaskUserIds.accountable.includes(n))
    userIdsForUserTasksToCreate.consulted = taskToEditUserIds.consulted.filter(n => !selectedTaskUserIds.consulted.includes(n))
    userIdsForUserTasksToCreate.informed = taskToEditUserIds.informed.filter(n => !selectedTaskUserIds.informed.includes(n))
  
    // Build array of user task IDs which need to be deleted

    userTaskIdsForUserTasksToDelete.responsible = this.state.selectedTask.responsible.map(user_task => {
      if (userIdsForUserTasksToDelete.responsible.includes(user_task.user_id)) {
          return (user_task.user_task_id)
        }
      })

    userTaskIdsForUserTasksToDelete.accountable = this.state.selectedTask.accountable.map(user_task => {
      if (userIdsForUserTasksToDelete.accountable.includes(user_task.user_id)) {
        return (user_task.user_task_id)
      }
    })

    userTaskIdsForUserTasksToDelete.consulted = this.state.selectedTask.consulted.map(user_task => {
      if (userIdsForUserTasksToDelete.consulted.includes(user_task.user_id)) {
        return (user_task.user_task_id)
      }
    })

    userTaskIdsForUserTasksToDelete.informed = this.state.selectedTask.informed.map(user_task => {
      if (userIdsForUserTasksToDelete.informed.includes(user_task.user_id)) {
        return (user_task.user_task_id)
      }
    })

    const getKeys = Object.values(userTaskIdsForUserTasksToDelete)
    const deleteThesePuppies = [].concat.apply([], getKeys)
    const deleteThesePuppiesFiltered = deleteThesePuppies.filter((itemInArray) => {
      return itemInArray !== undefined
    })

    // Build user tasks to be created

    const taskId = task.id
    const userTasksToCreate = []

    userIdsForUserTasksToCreate.responsible.forEach(userId => {

      userTasksToCreate.push(
            {
              task_id: taskId,
              function_id: 1,
              user_id: userId
            }
        )
    })

    userIdsForUserTasksToCreate.accountable.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 2,
          user_id: userId
        }
      )
    })

    userIdsForUserTasksToCreate.consulted.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 3,
          user_id: userId
        }
      )
    })

    userIdsForUserTasksToCreate.informed.forEach(userId => {

      userTasksToCreate.push(
        {
          task_id: taskId,
          function_id: 4,
          user_id: userId
        }
      )
    })

    // Delete user tasks

    deleteThesePuppiesFiltered.forEach((userTaskId, index) => {
      setTimeout(() => {
        return fetch(`http://localhost:3001/api/v1/user_tasks/${userTaskId}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
          }
        })
          .then(this.putProjectDataInState)
      }, index * 1000) // setTimeout is here because SQLite doesn't like handling multiple entries concurrently. I could update to Postgres or other DB at a later time

    })

    // Send user tasks to the server for creation!

      userTasksToCreate.forEach((userTask, index) => {
        setTimeout(() => {
          return fetch(`http://localhost:3001/api/v1/user_tasks`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(userTask)
          })
          .then(this.putProjectDataInState)
        }, index * 1000) // setTimeout is here because SQLite doesn't like handling multiple entries concurrently. I could update to Postgres or other DB at a later time
      })  



      // Update the task text


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

  handleDelete = (task) => {
    fetch(`http://localhost:3001/api/v1/tasks/${task.id}`,{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(this.putProjectDataInState)

  }

  deleteUserTask = (user_task) => {
    fetch(`http://localhost:3001/api/v1/user_tasks/${user_task.user_task_id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(this.putProjectDataInState)
      // .then(() => {
      //   this.setState({ hideTopMessage: false, topMessage: { header: `successfully deleted ${user_task.full_name} from task`, message: 'woooh!'}})
      //   setTimeout(() => this.setState({ hideTopMessage: true, topMessage: { header: ``, message: '' } }), 1000)
      // })
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
          <Message positive hidden={this.state.hideTopMessage}>
            <Message.Header>{this.state.topMessage.header}</Message.Header>
            <p>
              {this.state.topMessage.message}
            </p>
          </Message>
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
                  createDropdowns={() => this.createDropdownsForEditModal(task)}
                  putSelectedTaskDataInState={this.putSelectedTaskDataInState}
                  taskName={this.state.selectedTask.task_name}
                  handleTextFieldChange={this.handleTextFieldChange}
                  handleDropdownChange={this.handleDropdownChangeForEditModal}
                  handleSubmit={this.handleSubmitOnEditTaskModal} 
                  handleDelete={this.handleDelete}  
                  />
                </Table.Cell>
                <Table.Cell>{
                  task.responsible.map((user_task, i) => {
                    return (<Label>
                      {user_task.user_full_name}
                      <Icon
                        onClick={() => this.deleteUserTask(user_task)}
                        name='delete' />
                    </Label>)
                  } )}
                </Table.Cell>
                <Table.Cell>{
                    task.accountable.map((user_task, i) => {
                      return (<Label>
                        {user_task.user_full_name}
                        <Icon
                          onClick={() => this.deleteUserTask(user_task)}
                          name='delete' />
                      </Label>)
                  } )}
                </Table.Cell>
                <Table.Cell>{
                  task.consulted.map((user_task, i) => {
                    return (<Label>
                      {user_task.user_full_name}
                      <Icon
                        onClick={() => this.deleteUserTask(user_task)}
                        name='delete' />
                    </Label>)
                  })}
                </Table.Cell>
                <Table.Cell>{
                  task.informed.map((user_task, i) => {
                    return (<Label>
                      {user_task.user_full_name}
                      <Icon 
                        onClick={() => this.deleteUserTask(user_task)} 
                        name='delete' />
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
                    createDropdowns={this.createDropdownsForCreateModal}
                    taskName={this.state.selectedTask.task_name}
                    handleTextFieldChange={this.handleTextFieldChange}
                    handleDropdownChange={this.handleDropdownChangeForCreateModal}
                    onTriggerButtonClick={() => {
                      this.setState({
                        selectedTask: {
                          taskId: null,
                          task_name: null,
                          responsible: [],
                          accountable: [],
                          consulted: [],
                          informed: []
                        }
                      })}}
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



// const DropDown = (props) => {
//   const handleOnChange = (e, data) => {
//     props.onDropChange(`hello! ${data.value}`)
//   }
//   return (
//     <select onChange={handleOnChange}>
//       {props.options.map(option => <option value={option.value}>{option.text}</option>)}
//     </select>
//   )
// }


// <DropDown onDropChange={(alertMessage) => alert(alertMessage)} options={[{ text: 'hi', value: 2 }, { text: 'yo', value: 3 }]} />


// Everytime you change the Dropdown, 
// there should be an alert which alerts 
// the third argument of your custom callback for onChange





















