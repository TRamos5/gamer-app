import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/FooterHome.css';


export default class FooterHome extends Component {
    render() {
        return (
            <Row>
                <Col lg={12} className="footerHome">
                    <footer>
                        Popular Games &#169; 2018
                    </footer>
                </Col>
            </Row>
        )
    }
}