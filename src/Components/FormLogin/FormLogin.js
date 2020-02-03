import  React,{useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export default (props) => {

  const {checkUser} = props

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleBtn = e => {
    e.preventDefault()
    if(email.trim() === '' || password.trim() === '') {
      setError(true)
      return 
    }
    setError(false)
    checkUser(user)
  }

  const {email, password} = user

  return (
    <>
  <Container>
    <Row className="justify-content-md-center">
      <Col xs={12}>
        <h1>Login</h1>
        { error ?  <p className="alerta-error"> Todos los campos son obligatorios!!</p> : null}
      <Form 
        onSubmit={handleBtn}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            target="email"
            name="email"
            type="email" 
            placeholder="Enter email" 
            onChange={handleChange}
            />
          <Form.Text className="text-muted">
            Enter the email provided
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            target="password"
            name="password" 
            type="password" 
            placeholder="Password" 
            onChange={handleChange}
            />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      </Col>
    </Row>
  </Container>
    </>
  )

}