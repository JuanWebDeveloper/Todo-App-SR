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
      };
    case types.GET_BY_ID:
      return {
        ...state,
        isEditing: action.payload,
      };
    case types.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
        isEditing: {},
        todoSearch: state.todoSearch.length > 0 ? state.todoSearch.map((todo) => (todo.id === action.payload.id ? action.payload : todo)) : [],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        todoSearch: state.todoSearch.length > 0 ? state.todoSearch.filter((todo) => todo.id !== action.payload) : [],
      };
    case types.SEARCH_TODOS:
      return {
        ...state,
        todoSearch: action.payload.todos,
        isSearching: action.payload.isSearching,
      };
    default:
      return state;
  }
};
