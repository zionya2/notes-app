import { all } from 'redux-saga/effects';
import {
  watchAddNote, watchDeleteNote, watchGetNotes, watchUpdateNote,
} from './notesReducer/sagas';

export function* rootSaga() {
  yield all([
    watchGetNotes(),
    watchAddNote(),
    watchUpdateNote(),
    watchDeleteNote(),
  ]);
}
