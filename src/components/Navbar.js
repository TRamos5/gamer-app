import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';



export default class Navbars extends Component {
    render() {

        return (
            <Navbar>
                <Nav>
                    <Link  to="/">Home</Link>
                    <Link to="/GameOne">Fortnite</Link>
                    <Link to="/GameTwo">World of Warcraft</Link>
                    <Link to="/GameThree">League of Legends</Link>
                </Nav>
            </Navbar>
        )
    }
}