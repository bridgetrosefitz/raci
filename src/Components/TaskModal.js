import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button 
          floated='left'
          icon
          labelPosition = 'left'
          primary
          onClick={props.onTriggerButtonClick}
          size='small'>
            <Icon name='plus square' /> Add Task
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
                value={props.taskName}
                onChange={props.handleTextFieldChange}
                />
            </Form.Field>
            {props.createDropdowns()}
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button 
        // color='black' 
        onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
            type='submit'
            icon='checkmark'
            onClick={(event, data) => {
              const text = data.taskName
              setOpen(false)
              props.handleSubmit(event, text)
              }}
            positive>
          Create task
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default TaskModal