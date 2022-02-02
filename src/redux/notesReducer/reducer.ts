import { NoteActionTypes, Action } from './types';

const initialState = {
  notes: [],
  isLoading: false,
  isLoadingError: null,
  activeNote: null,
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
    default:
      return state;
  }
};
