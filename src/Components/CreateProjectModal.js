import React from 'react'
import { Button, Header, Modal, Icon, Form } from 'semantic-ui-react'


export default (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button
        floated='left'
        icon
        labelPosition='left'
        primary
        // onClick={props.onTriggerButtonClick}
        size='small'>
        <Icon name='plus square icon' /> Create Project
        </Button>}
    >
      <Modal.Header>Create Project</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* <p>
            Placeholder in case I want to write instructions
          </p> */}
          <Form>
            <Form.Field>
              <label>Project name</label>
              <input
                placeholder='Describe the project'
                // value={props.taskName}
                // onChange={props.handleTextFieldChange}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button 
          onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          type='submit'
          onClick={(event, data) => {
            const task = props.task
            setOpen(false)
            props.handleSubmit(event, task)
          }}
          positive>
          Create Project
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
