import React from 'react';
import Menu from '../Components/Menu'
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'


export default () => {

  const [modalShow, setModalShow] = React.useState(false);

  const handleChange = (e) => {
    setModalShow(true) 
  }

  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Eventos próximos</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div>
            <Card className="text-center">
              <Card.Header>Nombre: Jorge Nitales</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Id: 1002
                    Fecha instalación: 01/11/2019
                    Próximo movimiento: Mantenimiento
                  </Card.Text>
                <Button id="2" variant="primary"size="sm" block onClick={(e) => handleChange(e)} >Más info</Button>
              </Card.Body>
              <Card.Footer className="text-muted">Siguiente mantenimineto: 01/10/2020 </Card.Footer>
            </Card>
          </div>
          </Col>
        </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Container>
    </>
  )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detalles
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <p>Nombre: jorge Nitales</p>
       <p>Equipo: Normal</p>
       <p>Trabajo: Gustavo</p>
       <p>Detalle: Se puso en el fregadero de abajo</p>
       <p>Dirección: Calle pepita con cacahuate 23</p>
       <p>Referencía: A un lado de los tacos ricos</p>
       <p>Telefono: 5512345678</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}