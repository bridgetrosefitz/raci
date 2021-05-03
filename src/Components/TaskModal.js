import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)
  const [taskText, setTaskText] = React.useState(null)
  // const state = {
  //   taskText: ''
  // }

  const teamMemberDropdown = () => {
    return (
    <Dropdown
      placeholder='Select team member'
      fluid
      selection
      options={props.teamMembers}
    />)
  }

  const handleTextFieldChange = event => {
    setTaskText(event.target.value)
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
      console.log("Hi this is 'data' from my fetch response", data)
      console.log("And this is the 'event' from my submit", event)
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
            <Form.Field>
              <label>Responsible</label>
              {teamMemberDropdown()}
            </Form.Field>
            <Form.Field>
              <label>Accountable</label>
              {teamMemberDropdown()}
            </Form.Field>
            <Form.Field>
              <label>Consulted</label>
              {teamMemberDropdown()}
            </Form.Field>
            <Form.Field>
              <label>Informed</label>
              {teamMemberDropdown()}
            </Form.Field>
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