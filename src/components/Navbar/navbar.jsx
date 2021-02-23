import React from 'react'
import { Navbar, Button, FormControl, Form, Nav } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
function navbar() {
  return (
    <div>

      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">WeBlog</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/allblogs">AllPosts</Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link href="/login"><Button variant="light">SignIn</Button></Nav.Link>
          <Nav.Link href="/signup"><Button variant="light">SignUp</Button></Nav.Link>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <br />
    </div>
  )
}

export default navbar
