import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle } from 'reactstrap';

import Navbar from './Navbar';
import Footer from './Footer';
import apiDataTwo from '../actions/apiDataTwo';

import '../styles/GameTwo.css';

class GameTwo extends React.Component {
    
    componentWillMount() {
        axios.get("https://api.twitch.tv/kraken/streams/?game=World%20of%20Warcraft", {
        headers: {
            "client-id": "m4efr58nccd12jir9z0mouwr7t3k5a",
            Accept: "application/json"
        }
        })
            .then(response => {
                this.props.onFetchTwo(response)
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

        for(let p in sr){
            finalArray.push(sr[p])
        }
        console.log(finalArray);

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
            <div className="bodyTwo">
                <Navbar />

                <h1 className="h1Class">World of Warcraft Streamers</h1>

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
      onFetchTwo: (response) => dispatch(apiDataTwo(response))
    }
  }
  
  var connectGameTwo = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GameTwo);

  export default connectGameTwo