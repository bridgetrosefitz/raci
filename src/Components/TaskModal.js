import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)
  const [taskText, setTaskText] = React.useState(null)
  const [responsibleUserId, setResponsibleUserId] = React.useState(null)
  const [accountableUserId, setAccountableUserId] = React.useState(null)
  const [consultedUserId, setConsultedUserId] = React.useState(null)
  const [informedUserId, setInformedUserId] = React.useState(null)

  // const teamMemberDropdown = () => {
  //   return (
  //   <Dropdown
  //     placeholder='Select team member'
  //     fluid
  //     hi="hi"
  //     selection
  //     options={props.teamMembers}
  //     onChange={event => handleDropdownChange(event)}
  //   />)
  // }

  const createDropdowns = () => {
    return(  
      props.raciFunctions.map(raciFunction => {
        return(
          <Form.Field>
            <label>{raciFunction.attributes.name}</label>
            <Dropdown
              placeholder='Select team member'
              fluid
              function_id={raciFunction.id}
              selection
              options={props.teamMembers}
              onChange={(e, d) => handleDropdownChange(e, d, raciFunction)}
            />
          </Form.Field>
        )
      })
    )
  }

  const handleTextFieldChange = event => {
    setTaskText(event.target.value)
  }

  const handleDropdownChange = (event, data, raciFunction) => {
    if (raciFunction.id === "1") {
      setResponsibleUserId(data.value)
    }
    else if (raciFunction.id === "2") {
      setAccountableUserId(data.value)
    }
    else if (raciFunction.id === "3"){
      setConsultedUserId(data.value)
    }
    else if (raciFunction.id === "4") {
      setInformedUserId(data.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const projectId = props.projectId
    const text = taskText
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
    .then(data => {
      props.raciFunctions.forEach((raciFunction, index) => {
        let functionId = parseInt(raciFunction.id)
        console.log("functionId, the little fucker:", functionId)
        let teamMemberId
        let taskId = parseInt(data.data.id)

        if(functionId === 1) {
          teamMemberId = responsibleUserId 
        }
        else if (functionId === 2) {
          teamMemberId = accountableUserId
        }
        else if (functionId === 3) {
          teamMemberId = consultedUserId
        }
        else if (functionId === 4) {
          teamMemberId = informedUserId
        }
        
        console.log("functionId", functionId, typeof(functionId))
        console.log("userId", teamMemberId, typeof (teamMemberId))
        console.log("taskId", taskId, typeof (teamMemberId))
        setTimeout(() => { 
          return fetch('http://localhost:3001/api/v1/user_tasks', {
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
        }, index * 1000)
      })

    })

    
    // return fetch(`http://localhost:3001/api/v1/user_tasks/`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   },
    //   body: {
    //     "task_id": taskId,
    //     "user_id": teamMemberId,
    //     "function_id": functionId
    //   }
    // })
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      // hi={props}
      trigger={
      <Button 
        floated='right'
        icon
        labelPosition = 'left'
        primary
        size='small'>
          <Icon name='plus square icon' /> Add Task
      </Button>
      }
    >
      <Modal.Header>Create new task</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Text</label>
              <input 
                placeholder='Define the task here...'
                value={taskText}
                onChange={handleTextFieldChange}
                />
            </Form.Field>
            {createDropdowns()}
            {/* <Form.Field>
              <label>Responsible</label>
              {teamMemberDropdown()}
            </Form.Field>
            <Form.Field>
              <label>Accountable</label>
              {teamMemberDropdown()}
              {}
            </Form.Field>
            <Form.Field>
              <label>Consulted</label>
              {teamMemberDropdown()}
            </Form.Field>
            <Form.Field>
              <label>Informed</label>
              {teamMemberDropdown()}
            </Form.Field> */}
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
            type='submit'
            icon='checkmark'
            onClick={(event, data) => {
              const text = data.taskText
              setOpen(false)
              handleSubmit(event, text)
              setTaskText("")
              }}
            positive>
          Create task
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default TaskModal