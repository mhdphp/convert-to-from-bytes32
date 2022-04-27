import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import FormToString from './FormToString.js';
import FormToBytes from './FormToBytes.js';

class Main extends Component {

    render() {

        return(
            <Row className='row justify-content-center mb-1 mt-2 text-center'>
                <Col className='col-4'>
                    <Card className='card bg-light mb-3'>
                    <Card.Body>
                        <Card.Title><b>Conversion From String To Bytes32</b></Card.Title>
                            <hr/><br/>
                            <FormToString />
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-1'></Col>
                <Col className='col-4'>
                    <Card className='card bg-light mb-3'>
                        <Card.Body>
                            <Card.Title><b>Conversion From Bytes32 To String</b></Card.Title>
                            <hr/><br/>
                            <FormToBytes />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Main;