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
    case types.SAVE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isSearching: false,
      };
    case types.GET_BY_ID:
      return {
        ...state,
        isEditing: action.payload,
      };
    default:
      return state;
  }
};
