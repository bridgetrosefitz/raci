import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default (props) => (
  <Menu borderless attached='top' style={{ border: 'none'}}>
    <Menu.Menu position='right'>
      <Menu.Item>
      {props.userFullName ? `Logged in as ${props.userFullName}` : ''}
      </Menu.Item>
      {props.onBack && 
      <Menu.Item>
        <Button
          onClick={props.onBack}
          floated="right"
        >{props.backText}</Button>
      </Menu.Item>}
      <Menu.Item>
        <Button
          onClick={props.logOut}
        >Log out</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)