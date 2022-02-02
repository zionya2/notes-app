import { put, takeLatest } from 'redux-saga/effects';
import {
  setNotes, setLoading, setLoadingError,
} from './actions';
import { NoteActionTypes } from './types';
import { notePayload } from './notePayload';

function* loadingNotesData() {
  try {
    yield put(setLoading(true));
    yield put(setNotes(notePayload));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoadingError(true));
  }
}

export function* watchGetNotes() {
  yield takeLatest(NoteActionTypes.LOAD_NOTES, loadingNotesData);
}
