import * as segmentLeaderboardActions from '../actions/segmentLeaderboardActions';

let defaultSegmentLeaderboard = {entries: []};

export function segmentLeaderboard(state = defaultSegmentLeaderboard, action) {
    switch (action.type) {
        case segmentLeaderboardActions.FETCH_SEGMENT_LEADERBOARD:
        case segmentLeaderboardActions.FETCH_SEGMENT_LEADERBOARD_ERROR:
        case segmentLeaderboardActions.CLEAR_SEGMENT_LEADERBOARD:
            return defaultSegmentLeaderboard;
        case segmentLeaderboardActions.UPDATE_SEGMENT_LEADERBOARD:
            return action.leaderboard;
        default:
            return state;
    }
}