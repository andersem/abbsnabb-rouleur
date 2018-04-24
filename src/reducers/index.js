import {combineReducers} from 'redux';
import * as totalLeaderboard from './totalLeaderboard';
import * as segmentLeaderboard from './segmentLeaderboard';

const appReducer = combineReducers({
    ...totalLeaderboard,
    ...segmentLeaderboard
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;