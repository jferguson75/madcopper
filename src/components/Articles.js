import React from 'react';
//import { Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Articles () {
    return(
        <Container>
            <Row>
                <Col className='articles'> 
                    <Row className='article-image'>
                        <img src='./images/1.png' alt='Article image' />
                    </Row>
                    <Row className='article-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='article-title'> 
                        The Article Title
                    </Row>
                    <Row className='article-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
                <Col className='articles'> 
                    <Row className='article-image'>
                        <img src='./images/2.png' alt='Article image' />
                    </Row>
                    <Row className='article-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='article-title'> 
                        The Article Title
                    </Row>
                    <Row className='article-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
                <Col className='articles'> 
                    <Row className='article-image'>
                        <img src='./images/3.png' alt='Article image' />
                    </Row>
                    <Row className='article-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='article-title'> 
                        The Article Title
                    </Row>
                    <Row className='article-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
            </Row>
            <Row>
            <Col className='articles'> 
                    <Row className='article-image'>
                        <img src='./images/4.png' alt='Article image' />
                    </Row>
                    <Row className='article-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='article-title'> 
                    The Article Title
                    </Row>
                    <Row className='article-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
                <Col className='articles'> 
                    <Row className='article-image'>
                        <img src='./images/5.png' alt='Article image' />
                    </Row>
                    <Row className='article-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='article-title'> 
                        The Article Title
                    </Row>
                    <Row className='article-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
                <Col className='articles'> 
                    <Row className='article-image'>
                        <img src='./images/6.png' alt='Article image' />
                    </Row>
                    <Row className='article-date'> 
                        JULY 28, 2023
                    </Row>
                    <Row className='article-title'> 
                        The Article Title
                    </Row>
                    <Row className='article-preview'>
                        After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};