import React from 'react'
import { Button, Header, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'

export default (props) => {
  const [open, setOpen] = React.useState(false)

  const handleTriggerButtonClick = () => {
    // props.putSelectedProjectDataInState(props.project.id)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<span><Button
        // style={{color: "white"}}
        style={{ marginLeft: '1.5vh', backgroundColor: "white" }}
        icon
        color='white'
        size='big'
        onClick={handleTriggerButtonClick}
        >
          <Icon 
            name='pencil square' />
      </Button></span>}
    >
      <Modal.Header>Edit Project</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* <p>
            Placeholder in case I want to write instructions
          </p> */}
          <Form>
            <Form.Field>
              <label>Project name</label>
              <Form.Input
                error={props.projectNameHasError ? { content: 'Project must have a name', pointing: 'below' } : null}
                onChange={props.onProjectNameChange}
                value={props.projectName}
              />
            </Form.Field>
            <Form.Field>
              <label>Team members</label>
                {props.createDropdown}  
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={
            () => {
              setOpen(false)
              props.onCancel()
            }}>
          Cancel
        </Button>
        <Button
          type='submit'
          onClick={(event) => {
            setOpen(false)
            props.onSubmit(event)
          }}
          positive>
          Update project
        </Button>
      </Modal.Actions>
    </Modal>
  )
}