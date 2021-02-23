import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

function Authnav() {
  return (
    <div>
      <div>

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">WeBlog</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/blog/getPosts">Your Posts</Nav.Link>
            <Nav.Link href="/blog/addPosts">Add Posts</Nav.Link>
          </Nav>

          <Form inline>
            <Nav.Link href="/logout"><Button variant="light">Log Out</Button></Nav.Link>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>

          </Form>
        </Navbar>
        <br />
      </div>
    </div>
  )
}

export default Authnav
