import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react';

export default function SignedInMenu({signOut}) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png'/>
      <Dropdown pointing='top left' text='Raj'>
          <DropdownMenu>
              <DropdownItem as={Link} to='/createEvent' text='Create Event' icon='plus'/>
              <DropdownItem text='My profile' icon='user'/>
              <DropdownItem onClick = {signOut} text='Sign out' icon='power'/>
          </DropdownMenu>
      </Dropdown>
    </Menu.Item>
  );
}
