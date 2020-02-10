import React from 'react'
import { Container, Row, Col, Form, Button, Card, ListGroup} from 'react-bootstrap'


export default () => {
  return (
    <Container>
    <Row>
      <Col>
      <h1>Mantenimiento</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="id-cliente">
              <Form.Label>Id Cliente</Form.Label>
              <Form.Control type="number" placeholder="Id" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="card-mtto">
              <Card style={{ width: '100%' }}>
                <Card.Header>nombre cliente</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Dirección</ListGroup.Item>
                  <ListGroup.Item>Teléfono</ListGroup.Item>
                  <ListGroup.Item>Equipo</ListGroup.Item>
                </ListGroup>
              </Card>
            </Form.Group>
          </Form.Row>


          <Form.Group controlId="comentarios-cliente">
            <Form.Label>Comentarios cliente</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>

          <Form.Row className="center">
            <Form.Group  as= {Col} controlId="aceptar">
              <Button variant="success" type="submit" block>
                Aceptar
              </Button>
            </Form.Group> 

          <Form.Group  as= {Col} controlId="cancelar">
            <Button variant="danger" type="submit"block >
              Cancelar
            </Button>
          </Form.Group>
        </Form.Row>

        </Form>
      </Col>
    </Row>
  </Container>
  )
}