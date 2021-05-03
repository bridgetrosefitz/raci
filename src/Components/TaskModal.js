import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)
  const [taskText, setTaskText] = React.useState(null)
  const [responsibleUserId, setResponsibleUserId] = React.useState(null)
  const [accountableUserId, setAccountableUserId] = React.useState(null)
  const [consultedUserId, setConsultedUserId] = React.useState(null)
  const [informedUserId, setInformedUserId] = React.useState(null)

  const teamMemberDropdown = () => {
    return (
    <Dropdown
      placeholder='Select team member'
      fluid
      hi="hi"
      selection
      options={props.teamMembers}
      onChange={event => handleDropdownChange(event)}
    />)
  }

  const createDropdowns = () => {
    return(  
      props.functionIds.map(functionId => {
        return(
          <Form.Field>
          <label>Placeholder Label</label>
            <Dropdown
              placeholder='Select team member'
              fluid
              function_id={functionId}
              selection
              options={props.teamMembers}
              onChange={event => handleDropdownChange(event)}
            />
          </Form.Field>
        )
      })
    )
  }

  const handleTextFieldChange = event => {
    setTaskText(event.target.value)
  }

  const handleDropdownChange = event => {
    console.log("hi")
  }

  const handleSubmit = (event, taskText) => {
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
      // console.log("Hi this is 'data' from my fetch response", data)
      console.log("And this is the 'responsibleUserId' from my state", responsibleUserId)
      const teamMemberId = 1 // Remove hard coding
      const functionId = 1 // Remove hard coding
      const taskId = data.data.attributes.id

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
                onChange={event => handleTextFieldChange(event)}
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
            onClick={(event) => {
              const text = taskText
              console.log("ths is the event.target", event.target)
              setResponsibleUserId(event.target)
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