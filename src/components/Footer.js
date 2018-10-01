import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/Footer.css';


class Footer extends Component {
    render() {
        return (
            <Row>
                <Col lg={12} className="footer">
                    <div>
                        Popular Games &#169; 2018
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Footer;