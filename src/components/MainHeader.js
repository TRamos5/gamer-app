import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ReactPlayer from 'react-player';

import '../styles/MainHeader.css';

export default class MainHeader extends Component {

    render(){
        return(
            <div>
                <Row className="videoPlayer">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ZgJuwQ581fs' playing={true} loop={true} width="100%" />
                </Row>
            </div>
        )
    }
}