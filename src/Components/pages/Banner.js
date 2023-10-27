import { Col, Container, Row } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Booking from './Bookings/Booking';

const bannerImage = require('../../assets/images/chhole-bhature.jpg');

const Banner = () => {
    return (
        <>
            <main>
                <section className="banner-section">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-content-wrapper">
                                    <div>
                                        <h1 className='banner-heading'>Little Lemon</h1>
                                        <h2 className='banner-subheading'>Chicago</h2>
                                    </div>
                                    <div className='banner-desc'>
                                        <span>
                                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                                        </span>
                                    </div>
                                    <div className='pt-3'>
                                        <button className='reserve-table'>
                                            <Link to="/bookings" className='reserve-table'>Reserve a Table</Link>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col className='image-hide-show'>
                                <div className="banner-image-wrapper">
                                    <img src={bannerImage} alt='banner' className='banner-image'></img>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    );
}

export default Banner