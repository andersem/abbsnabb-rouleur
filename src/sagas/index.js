import { call, put, all } from 'redux-saga/effects'
import * as totalLeaderboardActions from '../actions/totalLeaderboardActions';
import * as segmentLeaderboardActions from '../actions/segmentLeaderboardActions';
import {takeLatest} from "redux-saga/effects";

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function* foobar() {
    const url = "https://6slz00ld46.execute-api.eu-central-1.amazonaws.com/prod/leaderboard?segmentId=12098216,1387885,1942901,4252879,5311719,632847,660072,665413,7121442,734891";
    try {
        const data = yield call(fetchAsync, url);
        yield put(totalLeaderboardActions.updateLeaderboard(data));
    } catch (error) {
        console.log(error.reason);
    }
}

function* fetchSegmentLeaderboard(action) {
    const url = "https://6slz00ld46.execute-api.eu-central-1.amazonaws.com/prod/leaderboard/" + action.segmentId;
    try {
        const data = yield call(fetchAsync, url);
        yield put(segmentLeaderboardActions.updateSegmentLeaderboard(data));
    } catch (error) {
        console.log(error.reason);
    }
}

function* sagas() {
    yield all([
        call(foobar),
        takeLatest(segmentLeaderboardActions.FETCH_SEGMENT_LEADERBOARD, fetchSegmentLeaderboard)
    ]);
}

export default sagas;