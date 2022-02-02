import { TNote } from '../../types';

export enum NoteActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_NOTES = 'SET_NOTES',
  LOAD_NOTES = 'LOAD_NOTES',
  SET_LOADING_ERROR = 'SET_LOADING_ERROR',
}

export type LoadingNotesAction = { type: NoteActionTypes.LOAD_NOTES };
export type SetLoadingAction = { type: NoteActionTypes.SET_LOADING, payload: boolean };
export type SetNotesAction = { type: NoteActionTypes.SET_NOTES, payload: TNote[] };
export type SetLoadingErrorAction = { type: NoteActionTypes.SET_LOADING_ERROR, payload: boolean };

export type Action =
  LoadingNotesAction
  | SetLoadingAction
  | SetNotesAction
  | SetLoadingErrorAction;

export type NoteState = {
  notes: TNote[];
  isLoading: boolean;
  activeNote: number;
  isLoadingError: null;
};
