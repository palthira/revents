import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ setFormOpen }) {
  const [authenticated, setAuthenticated] = useState(false);

  const history = useHistory();

  function handleHistory() {
    setAuthenticated(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header={true}>
          <img src='assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item name='Events' as={NavLink} to='/events' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button
              onClick={() => {
                setFormOpen();
              }}
              positive
              inverted
              content='Create Events'
            />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleHistory} />
        ) : (
          <SignedOutMenu authenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
