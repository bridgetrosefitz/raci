import React from 'react'
import { Button, Header, Icon, Modal, Grid } from 'semantic-ui-react'

export default (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button
      color='red'
      floated='right'>
      <Icon name='trash alternate outline'/>
      Delete project</Button>}
    >
      <Header icon>
        <Icon name='trash alternate outline' />
        <br/>
        Are you sure you want to delete this Project?
      </Header>
      <Modal.Content>
      <Grid>
        <Grid.Column width={3}/>
        <Grid.Column width={10}>
        <p>
          {`Delete "${props.projectName}" along with all associated tasks?`}
        </p>
          </Grid.Column>
          <Grid.Column width={3}/>
      </Grid>
      
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='grey' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No, go back
        </Button>
        <Button color='red' inverted 
        onClick={() => 
        {props.deleteProject(props.projectId)
        setOpen(false)}}>
          <Icon name='checkmark' /> Yes, delete
        </Button>
      </Modal.Actions>
    </Modal>
  )
}