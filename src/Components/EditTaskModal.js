import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function EditTaskModal(props) {
  const [open, setOpen] = React.useState(false)


  const handleTriggerButtonClick = () => {
    props.putSelectedTaskDataInState(props.task.id)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          icon
          onClick={handleTriggerButtonClick}
          floated='right'>
          <Icon name='pencil square' />
        </Button>
      }
    >
    <Modal.Header>Edit task</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
            <Form.Field>
              <label>Text</label>
              <input
                placeholder='Define the task here...'
                value={props.taskText}
                onChange={props.handleTextFieldChange}
              />
            </Form.Field>
            {props.createDropdowns(props.task)}
        </Form>
      </Modal.Description>
    </Modal.Content>
    </Modal>
  )
}

export default EditTaskModal
