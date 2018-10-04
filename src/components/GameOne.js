import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle } from 'reactstrap';

import Navbar from './Navbar';
import Footer from './Footer';
import apiDataOne from '../actions/apiDataOne';

import '../styles/GameOne.css';

class GameOne extends React.Component {
    
    componentWillMount() {
    
        axios.get("https://api.twitch.tv/kraken/streams/?game=Fortnite", {
        headers: {
            "client-id": "m4efr58nccd12jir9z0mouwr7t3k5a",
            Accept: "application/json"
        }
        })
            .then(response => {
                this.props.onFetchOne(response)
            })
            .catch(e => {
                console.log("error", e);
            });
     }

    
    render() {
        let stream = this.props.gameData.data

        let streamResult = [];

        for(let x in stream){
            streamResult.push(stream[x]);
        }

        let sr = streamResult[1];

        let finalArray = [];
        console.log(finalArray);
        for(let p in sr){
            finalArray.push(sr[p])
        }

        let result = finalArray.map(game => {
            return <div className="cards">
                <Card className="icard">
                    <CardBody>
                    <CardTitle>{game.channel.display_name}</CardTitle>
                    </CardBody>
                    <CardImg width="30%" src={game.channel.logo} alt="Streamer's Logo" />
                    <CardBody>
                    <CardText>{game.channel.status}</CardText>
                    <CardLink href={game.channel.url} target="_blank">{game.channel.url}</CardLink>
                    </CardBody>
                </Card>
            </div>
        })
        return (
            <div className="bodyOne">
                <Navbar />

                <h1 className="h1Class">Fortnite Streamers</h1>

                <div className="cardHolder">
                    {result}
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        gameData: state.apiInfo
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      onFetchOne: (response) => dispatch(apiDataOne(response))
    }
  }
  
  var connectGameOne = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GameOne);

  export default connectGameOne