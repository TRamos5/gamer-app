import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';



import MainHeader from './MainHeader';
import Footer from './Footer';
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
                
                <Footer />

            </div>
        )
    }
}