import * as totalLeaderboardActions from '../actions/totalLeaderboardActions';
import moment from 'moment';

const defaultState = {entries: [], error: null, loading: false};
export function totalLeaderboard(state = defaultState, action) {
    switch (action.type) {
        case totalLeaderboardActions.FETCH_LEADERBOARD:
            return {...state, loading: true};
        case totalLeaderboardActions.UPDATE_LEADERBOARD:
            return {
                ...defaultState,
                lastUpdated: moment().toISOString(), 
                entries: action.leaderboard
            };
        case totalLeaderboardActions.UPDATE_LEADERBOARD_ERROR:
            return {...state, error: action.message, loading: false};
        default:
            return state;
    }
}