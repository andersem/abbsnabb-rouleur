import * as totalLeaderboardActions from '../actions/totalLeaderboardActions';
import moment from 'moment';

const defaultState = {
    entries: [], 
    segmentLeaderboards: {}, 
    error: null, 
    loading: false
};

export function totalLeaderboard(state = defaultState, action) {
    switch (action.type) {
        case totalLeaderboardActions.FETCH_LEADERBOARD:
            return {...state, loading: true};
        case totalLeaderboardActions.UPDATE_LEADERBOARD:
            return {
                ...defaultState,
                lastUpdated: moment().toISOString(), 
                entries: action.leaderboard,
                segmentLeaderboards: mapToSegmentLeaderboards(action.leaderboard)
            };
        case totalLeaderboardActions.UPDATE_LEADERBOARD_ERROR:
            return {...state, error: action.message, loading: false};
        default:
            return state;
    }
}

const mapToSegmentLeaderboards = (entries) => {
    const temp = {};
    entries.forEach(athlete => {
        athlete.segments.forEach(athletes_effort => {
            const segmentId = athletes_effort.segment_id;
            if (!temp.hasOwnProperty(segmentId)) {
                temp[segmentId] = {segment_id: segmentId, entries: []}
            }
            const insertIndex = temp[segmentId].entries.findIndex(effort => effort.rank > athletes_effort.rank);

            if (insertIndex !== -1) {
                temp[segmentId].entries.splice(insertIndex, 0, athletes_effort);
            } else {
                temp[segmentId].entries.push(athletes_effort);                
            }
        })
    });
    return temp; 
}