import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <Row>
                <Col lg={12} className="footer">
                    <footer>
                        Popular Streamers &#169; 2018
                    </footer>
                </Col>
            </Row>
        )
    }
}
