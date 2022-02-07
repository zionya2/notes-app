import { TNote } from '../../types';
import { NoteActionTypes, TActiveId } from './types';

export const loadingNotes = () => ({ type: NoteActionTypes.LOAD_NOTES });
export const setLoading = (payload: boolean) => ({ payload, type: NoteActionTypes.SET_LOADING });
export const setNotes = (payload: TNote[]) => ({ payload, type: NoteActionTypes.SET_NOTES });
export const setLoadingError = (payload: boolean) => ({
  payload, type: NoteActionTypes.SET_LOADING_ERROR,
});
export const setActiveId = (payload:TActiveId) => ({
  payload, type: NoteActionTypes.SET_ACTIVE_ID,
});
export const setSearchString = (payload:string) => ({
  payload, type: NoteActionTypes.SET_SEARCH_STRING,
});
export const SearchNotes = (payload:string) => ({
  payload, type: NoteActionTypes.SEARCH_NOTES,
});
export const addNewNote = (payload:TNote) => ({ payload, type: NoteActionTypes.ADD_NEW_NOTE });
export const addNote = (payload:TNote) => ({ payload, type: NoteActionTypes.ADD_NOTE });
export const updateNote = (payload:TNote) => ({ payload, type: NoteActionTypes.UPDATE_NOTE });
export const updateNotePayload = (payload:TNote) => ({
  payload, type: NoteActionTypes.UPDATE_NOTE_PAYLOAD,
});
export const deleteNote = (payload:string) => ({ payload, type: NoteActionTypes.DELETE_NOTE });
export const deleteNotePayload = (payload:string) => ({
  payload, type: NoteActionTypes.DELETE_NOTE_PAYLOAD,
});
