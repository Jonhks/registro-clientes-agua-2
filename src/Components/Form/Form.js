import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap'

export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Cliente Nuevo</h1>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="ingresa el nombre" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="equipos">
                <Form.Label>Equipo</Form.Label>
                <Form.Control as="select">
                  <option>Equipos...</option>
                  <option>Ósmosis inversa doméstico.</option>
                  <option>Bajo tarja alcalinizador.</option>
                  <option>Bajo tarja carbón activado</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} controlId="renta-venta">
                <Form.Label>Renta/Venta</Form.Label>
                <Form.Control as="select">
                  <option>Status...</option>
                  <option>Renta.</option>
                  <option>Venta.</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="id-cliente">
              <Form.Label>Id Cliente</Form.Label>
              <Form.Control type="number" placeholder="Id" />
            </Form.Group>
            </Form.Row>

            <Form.Group controlId="calle">
              <Form.Label>Dirección</Form.Label>
              <Form.Control placeholder="Calle" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="numeroe-ext">
                <Form.Label>Número Ext.</Form.Label>
                <Form.Control type="number" placeholder="Número ext." />
              </Form.Group>
              <Form.Group as={Col} controlId="numero-int">
                <Form.Label>Número Int.</Form.Label>
                <Form.Control type="number" placeholder="Número int." />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="colonia">
                <Form.Label>Colonia.</Form.Label>
                <Form.Control type="text" placeholder="Colonia." />
              </Form.Group>
              
              <Form.Group as={Col} controlId="codigo-postal">
                <Form.Label>Código postal.</Form.Label>
                <Form.Control type="number" placeholder="Código postal." />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="municipio">
                <Form.Label>Municipio.</Form.Label>
                <Form.Control type="text" placeholder="Municipio." />
              </Form.Group>

              <Form.Group as={Col} controlId="delegacion">
                <Form.Label>Delegación.</Form.Label>
                <Form.Control type="text" placeholder="Delegación." />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="telefono">
                <Form.Label>Teléfono fijo.</Form.Label>
                <Form.Control type="number" placeholder="Teléfono fijo." />
              </Form.Group>

              <Form.Group as={Col} controlId="celular">
                <Form.Label>Celular.</Form.Label>
                <Form.Control type="text" placeholder="Celular." />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email.</Form.Label>
                <Form.Control type="email" placeholder="Email." />
              </Form.Group>

              <Form.Group as={Col}  id="check-mtto">
                <Form.Label>Mantenimiento.</Form.Label>
                <Form.Check type="checkbox" label="Recordar Mtto" />
             </Form.Group>
            </Form.Row>

            <Form.Group controlId="referencias">
              <Form.Label>Referencias</Form.Label>
              <Form.Control placeholder="Referencias" />
            </Form.Group>

            <Form.Row>
              <Form.Group  as= {Col}controlId="aceptar">
                <Button variant="success" type="submit" block>
                  Aceptar
                </Button>
              </Form.Group>

            <Form.Group  as= {Col}controlId="cancelar">
              <Button variant="danger" type="submit" block>
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