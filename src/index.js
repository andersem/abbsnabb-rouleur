import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'material-components-web/dist/material-components-web.min.css';
import reducers from './reducers/index';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import TotalLeaderboard from "./components/TotalLeaderboard";
import SegmentLeaderboard from "./components/SegmentLeaderboard";
import SegmentSelect from "./components/SegmentSelect";
import Modal from 'react-modal';
import moment from 'moment';
import 'moment/locale/nb';

moment.locale('nb');

const sagaMiddleware = createSagaMiddleware();

const devtools = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :  compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

Modal.setAppElement('#root');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <SegmentSelect/>
                <Switch>
                    <Route path="/segment/:segmentId" component={SegmentLeaderboard}/>
                    <Route path="/" component={TotalLeaderboard}/>
                </Switch>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
