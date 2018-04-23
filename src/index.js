import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reducers from './reducers/index';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';
import TotalLeaderboard from "./components/TotalLeaderboard";
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const devtools = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :  compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={TotalLeaderboard}/>
        </Router>
    </Provider>, document.getElementById('root'));
