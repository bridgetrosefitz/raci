import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

function TaskModal() {
  const [open, setOpen] = React.useState(true)

  // if (open) {
  //   alert('im open!')
  // } else {
  //   alert('im closed!')
  // }

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
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default TaskModal