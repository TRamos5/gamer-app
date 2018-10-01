import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';


import MainHeader from './MainHeader';
import Footer from './Footer';


export default class Home extends Component {

    render(){

        return(
            <div>
                <MainHeader />

                <Footer />
            </div>
        )
    }



}