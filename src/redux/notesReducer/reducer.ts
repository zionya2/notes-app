import { NoteActionTypes, Action, NoteState } from './types';

const initialState:NoteState = {
  notes: [],
  isLoading: false,
  isLoadingError: null,
  activeNote: null,
  activeId: '',
};

export const notesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case NoteActionTypes.SET_LOADING:
      return {
        ...state, isLoading: action.payload,
      };
    case NoteActionTypes.SET_NOTES:
      return {
        ...state, notes: action.payload,
      };
    case NoteActionTypes.SET_LOADING_ERROR:
      return {
        ...state,
        isLoadingError: action.payload,
        isLoading: false,
      };
    case NoteActionTypes.ADD_NOTE:
      return {
        ...state, notes: [action.payload, ...state.notes],
      };
    case NoteActionTypes.UPDATE_NOTE_PAYLOAD:
      return {
        ...state,
        notes: state.notes.map((note) => (note.id !== action.payload.id ? note : action.payload)),
      };
    case NoteActionTypes.DELETE_NOTE_PAYLOAD:
      return {
        ...state,
        activeId: null,
        activeNote: null,
        notes: state.notes.filter((note) => (note.id !== action.payload)),
      };
    case NoteActionTypes.SET_ACTIVE_ID:
      return {
        ...state,
        activeNote: state.notes.find((note) => note.id === action.payload),
        activeId: action.payload,
      };
    default:
      return state;
  }
};
