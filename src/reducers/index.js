import {combineReducers} from 'redux';
import * as totalLeaderboard from './totalLeaderboard';

const appReducer = combineReducers({
    ...totalLeaderboard
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;