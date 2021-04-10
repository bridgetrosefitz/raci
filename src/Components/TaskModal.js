import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)

  // if (open) {
  //   alert('im open!')
  // } else {
  //   alert('im closed!')
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
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
          type='submit'>Create task</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default TaskModal