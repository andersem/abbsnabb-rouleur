import {combineReducers} from 'redux';
import * as participants from './totalLeaderboard';

const appReducer = combineReducers({
    ...participants
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;