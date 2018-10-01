import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ReactPlayer from 'react-player';

import '../styles/MainHeader.css';

export default class MainHeader extends Component {

    render(){
        return(
            <div>
                <Row className="videoPlayer">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ZgJuwQ581fs' playing={true} loop={true} width="100%" />
                </Row>
                <Row>
                    <Col lg={12}>
                        <p className="welcome">
                            Welcome to the Gamer Zone! Select a Game to View Popular Streamers 
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}