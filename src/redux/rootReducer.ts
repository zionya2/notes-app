import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer/reducer';

export const rootReducer = combineReducers({
  notes: notesReducer,
});
