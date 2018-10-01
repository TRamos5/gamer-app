import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';
import apiDataThree from '../actions/apiDataThree';



class GameThree extends React.Component {
    
    componentWillMount() {
        axios.get("https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends", {
        headers: {
            "client-id": "m4efr58nccd12jir9z0mouwr7t3k5a",
            Accept: "application/json"
        }
        })
            .then(response => {
                this.props.onFetchThree(response)
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
            return <li className="streamList">{game.channel.display_name}</li>
        })
        return (
            <div>
                <Navbar />
                {result}
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
      onFetchThree: (response) => dispatch(apiDataThree(response))
    }
  }
  
  var connectGameThree = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GameThree);

  export default connectGameThree