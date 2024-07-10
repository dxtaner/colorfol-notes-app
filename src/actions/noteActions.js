// actions/noteActions.js
import { ADD_NOTE, DELETE_NOTE } from "./types";

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});
