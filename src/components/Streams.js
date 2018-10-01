import React from 'react';


import Loader from './presentational/Loader';
import Home from './Home';

import '../styles/Footer.css';

export default class Streams extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    
    componentWillMount() {
        fetch('https://api.twitch.tv/kraken/streams/featured?&client_id=m4efr58nccd12jir9z0mouwr7t3k5a')
        .then((response => response.json()))
        .then(response => this.props.onFetchOne(response))
      }

    
    render() {

        let stream = this.props.gameData.featured

        let streamResult = [];

        for(let x in stream){
            streamResult.push(stream[x]);
        }

        console.log(streamResult);

        console.log(stream);
        
        return (
            <div>
                {
                    streamResult.map(game => {
                        return <li className="streamList">{game.stream.game}</li>
                    })
                }
            
                <Home />
               
               <Loader />
            </div>
        )
    }
}