import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home';
import GameOne from './components/GameOne';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';
import TwitchAppReducer from './reducers/TwitchAppReducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(TwitchAppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={ store }>
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/GameOne" component={GameOne} />
            <Route exact path="/GameTwo" component={GameTwo} />
            <Route exact path="/GameThree" component={GameThree} />
        </Switch>
    </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
