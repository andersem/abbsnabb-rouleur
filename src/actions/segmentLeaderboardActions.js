export const FETCH_SEGMENT_LEADERBOARD = 'FETCH_SEGMENT_LEADERBOARD';
export function fetchSegmentLeaderboard(segmentId) {
    return {
        type: FETCH_SEGMENT_LEADERBOARD,
        segmentId
    }
}

export const FETCH_SEGMENT_LEADERBOARD_ERROR = 'FETCH_SEGMENT_LEADERBOARD_ERROR';
export function fetchSegmentLeaderboardError(error) {
    return {
        type: FETCH_SEGMENT_LEADERBOARD_ERROR,
        error
    }
}

export const UPDATE_SEGMENT_LEADERBOARD = 'UPDATE_SEGMENT_LEADERBOARD';
export function updateSegmentLeaderboard(leaderboard) {
    return {
        type: UPDATE_SEGMENT_LEADERBOARD,
        leaderboard
    }
}

export const CLEAR_SEGMENT_LEADERBOARD = 'CLEAR_SEGMENT_LEADERBOARD';
export function clearSegmentLeaderboard() {
    return {
        type: CLEAR_SEGMENT_LEADERBOARD
    }
}