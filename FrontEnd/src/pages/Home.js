import React from 'react'
import {Row, Col, Button} from 'react-bootstrap' 
import { LinkContainer } from 'react-router-bootstrap'

function Home(){
    return <Row>
        <Col >
            <div>
                <h1>Share the world with your friends</h1>
                <p>Chat with the world</p>
                <LinkContainer to="/chat">
                    <Button variant="success">
                        Get started <i className='fas fa-comments home-message-icon'></i>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
    </Row>
}

export default Home