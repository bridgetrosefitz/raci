import React from "react";
import { Grid, Icon, Label, Table, Button, Form, Dropdown, Message, Header, Container, TableBody } from 'semantic-ui-react';
import TaskModal from './TaskModal';
import EditTaskModal from './EditTaskModal';
import DeleteProjectWarningModal from './DeleteProjectWarningModal'
import EditProjectModal from './EditProjectModal';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import API from '../api';

export default class RACITable extends React.Component {
  constructor() {
    super();

    this.state = {
      allUsers: [],
      newMembersToAdd: [],
      showAddUsers: false,
      hideTopMessage: true,
      topMessage: {
        header: '',
        message: '',
      },
      projectId: '',
      projectName: '',
      projectNameForUpdating: '',
      functions: [],
      tasks: [],
      creator: {},
      members: [],
      projectToEditMembers: [],
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

    API.Project.show(projectId)
      .then(data => this.setState({
        projectId: data.data.id,
        projectName: data.data.attributes.name,
        projectNameForUpdating: data.data.attributes.name,
        tasks: data.data.attributes.tasks,
        creator: data.data.attributes.creator,
        members: data.data.attributes.members,
      }))

    API.Function.index()
      .then(data => this.setState({
        functions: data.data
      }
      ))
  }

  putAllUsersDataInState = () => {
    API.User.index()
    .then(data => this.setState({allUsers: data.data}))
  }

  createTeamMemberOptions = () => {
    return this.state.members.map(member => ({
          key: member.id,
          text: member.first_name,
          value: member.id
        }))
  }

  mapAllUsersToDropdown = () => {
    return this.state.allUsers
      // .filter(user => (!this.state.members.map(member => member.id).includes(parseInt(user.id))))
      .map(user => ({
        key: parseInt(user.id),
        text: user.attributes.full_name,
        value: parseInt(user.id)
      }))
  }

  createDropdownForEditProjectModal = () => {
    const defaultValues = this.state.members ? this.state.members.map((member) => member.id) : []
    
    return (
      <Dropdown
        placeholder='Add team members'
        fluid
        multiple
        selection
        options={this.mapAllUsersToDropdown()}
        defaultValue={defaultValues}
        onChange={(event, data) => { this.handleDropdownChangeForEditProjectModal(data) }}

      />
    )
  }

  createDropdownsForEditTaskModal = (task) => {

    return (
      this.state.functions.map((raciFunction, index) => {
        const functionName = raciFunction.attributes.name.toLowerCase()
        const defaultValues = task ? task[functionName].map(userTask => userTask.user_id) : [];
        return (
          <Form.Field
            key={index}>
            <label>{raciFunction.attributes.name}</label>
            <Dropdown
              placeholder='Select team member'
              fluid
              multiple={[3,4].includes(parseInt(raciFunction.id))}
              defaultValue={[3,4].includes(parseInt(raciFunction.id)) ? defaultValues : defaultValues[0]}
              selection
              options={this.createTeamMemberOptions()}
              onChange={(event, data) => {this.handleDropdownChangeForEditTaskModal(data, raciFunction)}}
            />
          </Form.Field>
        )
      })
    )
  }

  createDropdownsForCreateTaskModal = (task) => {

    return (
      this.state.functions.map((raciFunction, index) => {
        const functionName = raciFunction.attributes.name.toLowerCase()
        return (
          <Form.Field
            key={index}>
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

  handleDropdownChangeForEditTaskModal = (data, raciFunction) => {

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

  handleDropdownChangeForEditProjectModal = (data) => {
      this.setState({
        projectToEditMembers: data.value
      })
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
      
    userTasksToCreate.forEach((userTask) => {
        API.UserTask.create(userTask)
          .then(this.putProjectDataInState)
    })

      this.setState({
        userTasksToCreate: []
      })
}

  handleSubmitOnTaskModal = (event) => {
    event.preventDefault()
    const projectId = this.state.projectId
    const text = this.state.selectedTask.task_name
    API.Task.create(text, projectId)
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

    deleteThesePuppiesFiltered.forEach((userTaskId) => {
        API.UserTask.destroy(userTaskId)
          .then(this.putProjectDataInState)
    })

    // Send user tasks to the server for creation!

      userTasksToCreate.forEach((userTask) => {
          API.UserTask.create(userTask)
          .then(this.putProjectDataInState)
      })  

      // Update the task text


  }

  handleSubmitOnEditProjectModal = (event) => {
    event.preventDefault()
    const projectId = this.state.projectId
    const name = this.state.projectName
    const existingMemberIds = this.state.members.map(member => member.id)
    const projectToEditUserIds = this.state.projectToEditMembers
    const membersToDeleteIds = []
    const membersToCreateIds = []
    const membershipIdsForMembershipsToDelete = []

    // Check if there are any IDs in projectToEditUserIds which are not in existingMembers, 
    // and add them to membersToCreate
    
    projectToEditUserIds.forEach(id => {
      if(existingMemberIds.includes(id)) {
        return
      } else {
        membersToCreateIds.push(id) 
      }
    })

    // Check if there are any IDs which have been removed, when compared with existing Members
    // and add them to membersToDelete
    
    existingMemberIds.forEach(id => {
      if (projectToEditUserIds.includes(id)) {
        return
      } else {
        membersToDeleteIds.push(id) 
      }
    })

    // Create Memberships
    const apiPromises = []
    membersToCreateIds.forEach(memberId => {
     apiPromises.push(API.Membership.create(memberId, projectId))
    })

    // Delete Memberships

    this.state.members.forEach(member => {
      if(membersToDeleteIds.includes(member.id)) {
        membershipIdsForMembershipsToDelete.push(member.membership_id)
      }
    })

    membershipIdsForMembershipsToDelete.forEach(membershipId => {
      apiPromises.push(API.Membership.destroy(membershipId))
    })

    // Update the text on the project, if it has changed

    if (this.state.projectName !== this.state.projectNameForUpdating) {
      if (this.state.projectNameForUpdating !== '') {
        apiPromises.push(API.Project.update(projectId, this.state.projectNameForUpdating))
      } else {
        // do error thing here
      }
    }

    Promise.allSettled(apiPromises).then(this.putProjectDataInState)

  }
      
  putSelectedProjectMembersDataInState = () => {
    let membersToShoveInState = []
    this.state.members.forEach(member => {
      membersToShoveInState = [...membersToShoveInState, member.id]
      })
    this.setState({
      projectToEditMembers: membersToShoveInState
    })
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
    API.Task.destroy(task.id)
    .then(this.putProjectDataInState)

  }

  handleNewMemberSelection = (event, data) => {
    this.setState({newMembersToAdd: data.value})
  }

  handleFlagging = (task) => {
    let flagToDeleteId = null
    const flagUserIds = task.flags.map(flag => flag.user_id)

    if (flagUserIds.includes(this.props.userId)) {
      task.flags.forEach(flag => {
        if(flag.user_id === this.props.userId) {
          API.Flag.destroy(flag.flag_id)
          .then(this.putProjectDataInState)
        }
      })
    }
    else {
      API.Flag.create(this.props.userId, task.id)
        .then(this.putProjectDataInState)
    }
  }

  createNewMembers = () => {
    this.state.newMembersToAdd.forEach((memberId) => {

      API.Membership.create(memberId, this.state.projectId)  
        .then(this.putProjectDataInState)
        .catch((data) => {
          this.setState({
            topMessage: {
              header: 'Error',
              message: data.errors
            },
            hideTopMessage: false
          })
          setTimeout(() => this.setState({ 
            hideTopMessage: true, 
            topMessage: { header: ``, message: '' } }), 2000)
        })
    })
    this.setState({ 
      showAddUsers: false,
      // newMembersToAdd: [] 
    })
  }

  deleteUserTask = (user_task) => {
    API.UserTask.destroy(user_task.user_task_id)
      .then(this.putProjectDataInState)
      // .then(() => {
      //   this.setState({ hideTopMessage: false, topMessage: { header: `successfully deleted ${user_task.full_name} from task`, message: 'woooh!'}})
      //   setTimeout(() => this.setState({ hideTopMessage: true, topMessage: { header: ``, message: '' } }), 1000)
      // })
  }

  deleteProject = (projectId) => {
    API.Project.destroy(projectId)
    .then(this.redirectToProjectsIndexPage)
  }

  redirectToProjectsIndexPage = () => {
    this.props.history.push(`/projects`)
  }

  handleProjectNameChange = (event) => {
    const projectName = event.target.value;
    this.setState({ projectNameForUpdating: projectName })
  }

  componentDidMount() {
      if (localStorage.token) {
        this.props.authenticateMe()
        this.putProjectDataInState()
        this.putAllUsersDataInState()
      } else {
        this.props.history.push('/login')
      }
  }

    render() {
      return(
        <Container>
          <Message hidden={this.state.hideTopMessage}>
            <Message.Header>{this.state.topMessage.header}</Message.Header>
            <p>
              {this.state.topMessage.message}
            </p>
          </Message>
          <Nav logOut={this.props.logOut} onBack={this.redirectToProjectsIndexPage} backText={'Back to Projects'} userFullName={this.props.userFullName}/>
          <Header as="h1">{this.state.projectName}
            <EditProjectModal 
              populateMembersToEdit={this.putSelectedProjectMembersDataInState}
              onProjectNameChange={this.handleProjectNameChange}
              projectName={this.state.projectNameForUpdating}
              createDropdown={this.createDropdownForEditProjectModal()}
              handleDropdownChange={this.handleDropdownChangeForEditProjectModal}
              onSubmit={this.handleSubmitOnEditProjectModal}
            />
          </Header>
          
          <Grid>
          { this.state.showAddUsers ?
            (
              <Grid.Column width={8}>
                  <div>
                    <Dropdown placeholder='Add Users' onChange={this.handleNewMemberSelection} fluid multiple selection options={this.mapAllUsersToDropdown()} />
                    <Button
                      onClick={this.createNewMembers}
                    >Add users</Button>
                  </div>
              </Grid.Column>
            ) :(
              <Grid.Column width={8}>
                <Label.Group circular>
                  {this.state.members.map((member, index) => <Label key={index}>{member.initials}</Label>)}
                  <Label color="blue" onClick={() => this.setState({ showAddUsers: true })} as='a'>+</Label>
                </Label.Group>
              </Grid.Column>
            )
          }
          </Grid>
          
       
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
            <Table.Body>
            {this.state.tasks.map((task, index) => {
              return (<Table.Row 
                error={task.flags.length > 0}
                key={index}>
                <Table.Cell>
                  {task.task_name}
                  <Label.Group circular>
                    {task.flags.map((flag, index) => <Label key={index} color="red">{flag.user_initials}</Label>)}
                  </Label.Group>
                <EditTaskModal
                  task={task}
                  projectId={this.state.projectId}
                  createDropdowns={() => this.createDropdownsForEditTaskModal(task)}
                  putSelectedTaskDataInState={this.putSelectedTaskDataInState}
                  taskName={this.state.selectedTask.task_name}
                  handleTextFieldChange={this.handleTextFieldChange}
                  handleDropdownChange={this.handleDropdownChangeForEditTaskModal}
                  handleSubmit={this.handleSubmitOnEditTaskModal} 
                  handleDelete={this.handleDelete}  
                  />
                <Button 
                  icon 
                  onClick={() => {this.handleFlagging(task)}}
                  inverted={!(task.flags.map(flag => flag.user_id).includes(this.props.userId) ? true : false)}
                  floated="right">
                  <Icon 
                  color="grey"
                  name="flag outline"></Icon>
                </Button>
                </Table.Cell>
                <Table.Cell>{
                  task.responsible.map((user_task, i) => {
                    return (<Label key={i}>
                      {user_task.user_full_name}
                      <Icon
                        onClick={() => this.deleteUserTask(user_task)}
                        name='delete' />
                    </Label>)
                  } )}
                </Table.Cell>
                <Table.Cell>{
                    task.accountable.map((user_task, i) => {
                      return (<Label key={i}>
                        {user_task.user_full_name}
                        <Icon
                          onClick={() => this.deleteUserTask(user_task)}
                          name='delete' />
                      </Label>)
                  } )}
                </Table.Cell>
                <Table.Cell>{
                  task.consulted.map((user_task, i) => {
                    return (<Label key={i}>
                      {user_task.user_full_name}
                      <Icon
                        onClick={() => this.deleteUserTask(user_task)}
                        name='delete' />
                    </Label>)
                  })}
                </Table.Cell>
                <Table.Cell>{
                  task.informed.map((user_task, i) => {
                    return (<Label key={i}>
                      {user_task.user_full_name}
                      <Icon 
                        onClick={() => this.deleteUserTask(user_task)} 
                        name='delete' />
                    </Label>)
                  })}
                </Table.Cell>
              </Table.Row>)
            })}  
            </Table.Body>
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell>
                  <TaskModal
                    projectId={this.state.projectId}
                    raciFunctions={this.state.functions}
                    createDropdowns={this.createDropdownsForCreateTaskModal}
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
                      })
                    }}
                    handleSubmit={this.handleSubmitOnTaskModal} />
                </Table.HeaderCell>
                <Table.HeaderCell colSpan='4'>
                  <DeleteProjectWarningModal
                    projectName={this.state.projectName}
                    projectId={this.state.projectId}
                    deleteProject={this.deleteProject}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
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





















