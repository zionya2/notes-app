import { put, takeLatest } from 'redux-saga/effects';
import {
  setNotes, setLoading, setLoadingError, addNote, updateNotePayload, deleteNotePayload,
  setSearchString,
  setActiveId,
} from './actions';
import {
  AddNewNoteAction, DeleteNoteAction, NoteActionTypes, SearchQueryAction, UpdateNoteAction,
} from './types';
import { payload } from './payload';

function* loadingNotesData() {
  try {
    yield put(setLoading(true));
    yield put(setNotes(payload));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoadingError(true));
  }
}
function* addPayloadNote(action:AddNewNoteAction) {
  yield put(addNote(action.payload));
}
function* updatePayloadNote(action:UpdateNoteAction) {
  yield put(updateNotePayload(action.payload));
}
function* deletePayloadNote(action:DeleteNoteAction) {
  yield put(setActiveId({ id: null }));
  yield put(deleteNotePayload(action.payload));
}
function* searchNotes(action:SearchQueryAction) {
  yield put(setSearchString(action.payload));
}

export function* watchGetNotes() {
  yield takeLatest(NoteActionTypes.LOAD_NOTES, loadingNotesData);
}
export function* watchAddNote() {
  yield takeLatest(NoteActionTypes.ADD_NEW_NOTE, addPayloadNote);
}
export function* watchUpdateNote() {
  yield takeLatest(NoteActionTypes.UPDATE_NOTE, updatePayloadNote);
}
export function* watchDeleteNote() {
  yield takeLatest(NoteActionTypes.DELETE_NOTE, deletePayloadNote);
}
export function* watchSearchQuery() {
  yield takeLatest(NoteActionTypes.SEARCH_NOTES, searchNotes);
}
