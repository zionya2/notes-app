import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import {
  setNotes, setLoading, setLoadingError, addNote, updateNotePayload, deleteNotePayload,
  setSearchString,
  setActiveId,
} from './actions';
import {
  AddNewNoteAction, DeleteNoteAction, NoteActionTypes, SearchQueryAction, UpdateNoteAction,
} from './types';
import { payload } from './payload';
import { TNote } from '../../types';
import { LocalStorage } from '../../constants';

function* loadingNotesData() {
  try {
    yield put(setLoading(true));
    const notes:TNote[] = yield JSON.parse(globalThis.localStorage.getItem(LocalStorage.KEY_NOTES) ?? '[]');
    yield put(setNotes(notes.length ? notes : payload));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoadingError(true));
  }
}
function* setNotesLocalStorage(keyName:string) {
  const notes:TNote[] = yield select((state) => state.notes.notes);
  yield globalThis.localStorage.setItem(keyName, JSON.stringify(notes));
}
function* addPayloadNote(action:AddNewNoteAction) {
  yield put(addNote(action.payload));
  yield call(setNotesLocalStorage, LocalStorage.KEY_NOTES);
}
function* updatePayloadNote(action:UpdateNoteAction) {
  yield put(updateNotePayload(action.payload));
  yield call(setNotesLocalStorage, LocalStorage.KEY_NOTES);
}
function* deletePayloadNote(action:DeleteNoteAction) {
  yield put(setActiveId({ id: null }));
  yield put(deleteNotePayload(action.payload));
  yield call(setNotesLocalStorage, LocalStorage.KEY_NOTES);
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
