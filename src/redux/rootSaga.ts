import { all } from 'redux-saga/effects';
import { watchGetNotes } from './notesReducer/sagas';

export function* rootSaga() {
  yield all([watchGetNotes()]);
}
