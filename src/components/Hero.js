import React from 'react';
//import { Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Hero() {
    return(
        <Container>
            <Row>
                <Col className='hero-feature'> 
                    <Row className='hero-feature-image'>
                        <img src='./images/8.png' alt='Featured Article image' />
                    </Row>
                    <Row className='hero-feature-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='hero-feature-title'> 
                        My Featured Article
                    </Row>
                    <Row className='hero-feature-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
                <Col className='hero-image'> 
                    <img src='./images/Investor.png' alt='Investor' />
                </Col>
            </Row>
        </Container>
    )
};