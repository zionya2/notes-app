import { GlobalState } from '../types';

export const notesSelector = (state: GlobalState) => state.notes.notes;
export const searchStringSelector = (state: GlobalState) => state.notes.searchString;
export const activeIdSelector = (state: GlobalState) => state.notes.activeId;
