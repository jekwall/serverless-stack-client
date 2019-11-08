import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import Routes from "./Routes";

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem href="/signup">Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem href="/login">Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes /> 
    </div>
  );
}
//Line 19 and 20 adds two linkts to our navbar using navbar bootstrap component. Collapse ensures that the two links will be collapsed on mobile devices
//Routes are added to the render below the Navbar which ensures that as we navigate to different routes in our app, the poriton below the navbar will reflect all that.
//Linkcontainers make sure that the link is highlighted in the navbar and it does not refresh the page while redicrecting
export default App;
