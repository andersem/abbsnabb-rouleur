import * as totalLeaderboardActions from '../actions/totalLeaderboardActions';

export function totalLeaderboard(state = [], action) {
    switch (action.type) {
        case totalLeaderboardActions.UPDATE_LEADERBOARD:
            return action.leaderboard;
        default:
            return state;
    }
}