import { GlobalState } from '../types';

export const notesSelector = (state: GlobalState) => state.notes.notes;
export const activeNoteSelector = (state: GlobalState) => state.notes.activeNote;
export const activeIdSelector = (state: GlobalState) => state.notes.activeId;
