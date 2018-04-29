import {call, put, all} from 'redux-saga/effects'
import * as totalLeaderboardActions from '../actions/totalLeaderboardActions';

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function* fetchTotalLeaderboard() {
    const url = "https://6slz00ld46.execute-api.eu-central-1.amazonaws.com/prod/leaderboard?segmentId=12098216,1387885,1942901,4252879,5311719,632847,660072,665413,7121442,734891";
    try {
        yield put(totalLeaderboardActions.fetchLeaderboard());
        const data = yield call(fetchAsync, url);
        yield put(totalLeaderboardActions.updateLeaderboard(data));
    } catch (error) {
        const msg = JSON.stringify(error);
        console.log(error);
        yield put(totalLeaderboardActions.updateLeaderboardError(msg));
    }
}

function* sagas() {
    yield all([
        call(fetchTotalLeaderboard)
    ]);
}

export default sagas;