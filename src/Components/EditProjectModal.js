import React from 'react'
import { Button, Header, Modal, Icon, Form, Dropdown } from 'semantic-ui-react'
import deleteProjectWarningModal from './DeleteProjectWarningModal'


const EditProjectModal = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleTriggerButtonClick = () => {
    // props.putSelectedProjectDataInState(props.project.id)
    props.populateMembersToEdit()
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => {setOpen(true)}}
      open={open}
      trigger={<span><Button
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
        {deleteProjectWarningModal(
          {
            projectName: props.projectName, 
            projectId: props.projectId, 
            deleteProject: props.deleteProject
          }
        )}
        <Button
          onClick={() => {
            setOpen(false)               
          // props.onCancel()
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

export default EditProjectModal