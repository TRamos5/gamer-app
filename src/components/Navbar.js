import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import '../styles/Navbar.css';

export default class Navbars extends Component {
    render() {

        return (
            <Navbar className="navBarWhole">
                <Nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/GameOne">Fortnite</Link>
                    <Link className="link" to="/GameTwo">World of Warcraft</Link>
                    <Link className="link" to="/GameThree">League of Legends</Link>
                </Nav>
            </Navbar>
        )
    }
}