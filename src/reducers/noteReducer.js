// reducers/noteReducer.js
import { ADD_NOTE, DELETE_NOTE } from "../actions/types";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        id: new Date().getTime(),
        text: action.payload.text,
        color: action.payload.color,
      };

      return {
        ...state,
        notes: [...state.notes, newNote],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
