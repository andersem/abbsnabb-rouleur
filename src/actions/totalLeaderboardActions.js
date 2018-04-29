export const FETCH_LEADERBOARD = 'FETCH_LEADERBOARD';
export function fetchLeaderboard() {
    return {
        type: FETCH_LEADERBOARD
    }
}

export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD';
export function updateLeaderboard(leaderboard) {
    return {
        type: UPDATE_LEADERBOARD,
        leaderboard
    }
}

export const UPDATE_LEADERBOARD_ERROR = 'UPDATE_LEADERBOARD_ERROR';
export function updateLeaderboardError(message) {
    return {
        type: UPDATE_LEADERBOARD_ERROR,
        message
    }
}