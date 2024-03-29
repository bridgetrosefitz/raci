import React from 'react'
import { Button, Header, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'


export default (props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
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
              <Form.Input
                error={props.projectNameHasError ? { content: 'Please enter your first name', pointing: 'below' } : null}
                onChange={props.onProjectNameChange}
                value={props.projectName}
                placeholder='Describe the project'
              />
            </Form.Field>
            <Form.Field>
              <label>Team members</label>
              <Dropdown 
              placeholder='Add team members' 
              onChange={props.onDropdownChange} 
              fluid 
              multiple 
              selection 
              options={props.dropdownOptions} />
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
          Create project
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
