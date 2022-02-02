import { TNote } from '../../types';
import { NoteActionTypes } from './types';

export const loadingNotes = () => ({ type: NoteActionTypes.LOAD_NOTES });
export const setLoading = (payload: boolean) => ({ payload, type: NoteActionTypes.SET_LOADING });
export const setNotes = (payload: TNote[]) => ({ payload, type: NoteActionTypes.SET_NOTES });
export const setLoadingError = (payload: boolean) => (
  { payload, type: NoteActionTypes.SET_LOADING_ERROR }
);
