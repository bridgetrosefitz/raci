import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)

  const teamMemberDropdown = () => {
    return (
    <Dropdown
      placeholder='Select team member'
      fluid
      selection
      options={props.teamMembers}
    />)
  }

  const handleSubmit = () => {
    fetch('http://localhost:3001/api/v1/projects/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: {
        
      }
    })
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
              <input placeholder='Define the task here...' />
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
            onClick={() => {
              setOpen(false)
              handleSubmit()
              }}
            positive>
          Create task
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default TaskModal