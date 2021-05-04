import React from 'react'
import { Button, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

function TaskModal(props) {
  const [open, setOpen] = React.useState(false)

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
              onChange={(e, d) => props.handleDropdownChange(e, d, raciFunction)}
            />
          </Form.Field>
        )
      })
    )
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
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
                value={props.taskText}
                onChange={props.handleTextFieldChange}
                />
            </Form.Field>
            {createDropdowns()}
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
              props.handleSubmit(event, text)
              // setTaskText("")
              }}
            positive>
          Create task
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default TaskModal