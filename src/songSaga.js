import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchSongStart, fetchSongSuccess, fetchSongFailure } from './songReducer';

// API call function
function fetchSongData(songId) {
  return fetch(`http://localhost:8000/song/${songId}`).then((res) => res.json());
}

// Worker saga
function* fetchSongDataSaga(action) {
  try {
    yield put(fetchSongStart());
    const songData = yield call(fetchSongData, action.payload);
    yield put(fetchSongSuccess(songData));
  } catch (error) {
    yield put(fetchSongFailure(error.message));
  }
}

// Watcher saga
export function* songSaga() {
  yield takeLatest('song/fetchSongData', fetchSongDataSaga);
}