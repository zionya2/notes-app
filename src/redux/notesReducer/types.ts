import { TNote } from '../../types';

export enum NoteActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_NOTES = 'SET_NOTES',
  LOAD_NOTES = 'LOAD_NOTES',
  SET_LOADING_ERROR = 'SET_LOADING_ERROR',
  SET_ACTIVE_ID = 'SET_ACTIVE_ID',
  ADD_NOTE = 'ADD_NOTE',
  ADD_NEW_NOTE = 'ADD_NEW_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  UPDATE_NOTE_PAYLOAD = 'UPDATE_NOTE_PAYLOAD',
  DELETE_NOTE = 'DELETE_NOTE',
  DELETE_NOTE_PAYLOAD = 'DELETE_NOTE_PAYLOAD',
}

export type LoadingNotesAction = { type: NoteActionTypes.LOAD_NOTES };
export type SetLoadingAction = { type: NoteActionTypes.SET_LOADING, payload: boolean };
export type SetNotesAction = { type: NoteActionTypes.SET_NOTES, payload: TNote[] };
export type SetLoadingErrorAction = { type: NoteActionTypes.SET_LOADING_ERROR, payload: boolean };
export type SetActiveIdAction = { type: NoteActionTypes.SET_ACTIVE_ID, payload: string };
export type AddNoteAction = { type: NoteActionTypes.ADD_NOTE, payload: TNote };
export type AddNewNoteAction = { type: NoteActionTypes.ADD_NEW_NOTE, payload: TNote };
export type UpdateNoteAction = { type: NoteActionTypes.UPDATE_NOTE, payload: TNote };
export type UpdateNotePayloadAction = { type: NoteActionTypes.UPDATE_NOTE_PAYLOAD, payload: TNote };
export type DeleteNoteAction = { type: NoteActionTypes.DELETE_NOTE, payload: string };
export type DeleteNotePayloadAction = {
  type: NoteActionTypes.DELETE_NOTE_PAYLOAD, payload: string,
};

export type Action =
  LoadingNotesAction
  | SetLoadingAction
  | SetNotesAction
  | SetLoadingErrorAction
  | SetActiveIdAction
  | AddNoteAction
  | AddNewNoteAction
  | UpdateNoteAction
  | UpdateNotePayloadAction
  | DeleteNoteAction
  | DeleteNotePayloadAction;

export type NoteState = {
  notes: TNote[];
  isLoading: boolean;
  activeNote: TNote | null;
  activeId: string;
  isLoadingError: null;
};
