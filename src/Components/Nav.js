import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const Nav = props => {
  return(
    <Menu borderless attached='top' style={{ border: 'none'}}>
      <Menu.Menu position='right'>
        <Menu.Item>
        {props.userFullName ? `Logged in as ${props.userFullName}` : ''}
        </Menu.Item>
        <Menu.Item>
          <Button
            onClick={props.logOut}
          >Log out</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Nav