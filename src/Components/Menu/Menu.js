import React from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'
import {Navbar, Nav} from 'react-bootstrap'
// import {Link} from 'react-router-dom'



export default () => {

  const logOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }


  return (
    <Navbar bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Próximos</Nav.Link>
        <Nav.Link href="/cliente-nuevo">Nuevo</Nav.Link>
        <Nav.Link href="#pricing">Mtto</Nav.Link>
        <Nav.Link onClick={logOut}>Logout</Nav.Link>
      </Nav>
  </Navbar>
  )
}