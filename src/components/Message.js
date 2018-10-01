import React, { Component } from 'react';

import '../styles/Message.css';

export default class Message extends Component {
    render() {

        return (
            <div className="message">
                <h1>Welcome to The Gamer Zone!</h1>
                <h4>Select a Game to View Popular Streamers!</h4>
            </div>
        )
    }
}