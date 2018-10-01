import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';



import MainHeader from './MainHeader';
import FooterHome from './FooterHome';
import Message from './Message';
import Navbar from './Navbar';
import Loader from './presentational/Loader';

import '../styles/Home.css';

export default class Home extends Component {

    render(){

        return(
            <div>
            
                <MainHeader />
                
                <Navbar />

                <Message />

                <Loader />
                
                <FooterHome />

            </div>
        )
    }
}