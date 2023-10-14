import { Card, Col, Container, Row, Button } from "react-bootstrap";
const greekSalad = require('../assets/images/greek-salad.jpg');
const lemonCake = require('../assets/images/lemon-cake.jpeg');
const bruschetta = require('../assets/images/bruschetta.jpg');

const Menu = () => {
    return (
        <section style={{ marginTop: "100px" }}>
            <Container>
                <Row>
                    <Col>
                        <h2>Special</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                    <Col xs={12} lg={4}>
                        <Card className="card">
                            <Card.Img variant="top" src={greekSalad} className="card-image" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} className="card-wrapper" >
                        <Card className="card">
                            <Card.Img variant="top" src={lemonCake} className="card-image" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} className="card-wrapper" >
                        <Card className="card">
                            <Card.Img variant="top" src={bruschetta} className="card-image" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col xs={12} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={greekSalad} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Menu;