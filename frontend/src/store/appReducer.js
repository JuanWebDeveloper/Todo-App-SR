import { types } from '../types/types';

const initialState = {
  todos: [],
  isEditing: {},
  todoSearch: [],
  isSearching: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
