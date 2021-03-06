import { types } from '../types/types';

// Helpers for the queries
import { headers, apiPath } from '../helpers/requests';

// Actions to get all to-do from the database
export const actionForGetAllTodos = () => {
  return async (dispatch) => {
    const credentials = {
      method: 'GET',
      headers,
    };

    const response = await fetch(apiPath, credentials);

    response
      .json()
      .then((data) => {
        dispatch(getAllTodos(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getAllTodos = (todos) => ({
  type: types.GET_ALL_TODOS,
  payload: todos,
});

// Actions to save a the to-dos
export const actionForSaveTodo = (todoDescription) => {
  return async (dispatch) => {
    const body = JSON.stringify({
      todoDescription: todoDescription,
      isCompleted: false,
    });

    const credentials = {
      method: 'POST',
      headers,
      body,
    };

    const response = await fetch(apiPath, credentials);

    response
      .json()
      .then((data) => {
        dispatch(saveTodo(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const saveTodo = (todo) => ({
  type: types.SAVE_TODO,
  payload: todo,
});

// Actions to get a to-do by its id
export const actionForGetById = (id) => {
  return async (dispatch) => {
    const credentials = {
      method: 'GET',
      headers,
    };

    const response = await fetch(`${apiPath}/${id}`, credentials);

    response
      .json()
      .then((data) => {
        dispatch(getById(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getById = (todo) => ({
  type: types.GET_BY_ID,
  payload: todo,
});

// Actions to update a the to-dos
export const actionForUpdateTodo = (todo) => {
  return async (dispatch) => {
    const { id, todoDescription, isCompleted } = todo;

    const body = JSON.stringify({
      id,
      todoDescription,
      isCompleted,
    });

    const credentials = {
      method: 'PUT',
      headers,
      body,
    };

    const response = await fetch(`${apiPath}/${id}`, credentials);

    response
      .json()
      .then((data) => {
        dispatch(updateTodo(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});

// Actions to delete a the to-dos
export const actionForDeleteTodo = (id) => {
  return async (dispatch) => {
    const credentials = {
      method: 'DELETE',
      headers,
    };

    const response = await fetch(`${apiPath}/${id}`, credentials);

    response
      .json()
      .then((data) => {
        data && dispatch(deleteTodo(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: id,
});

// Actions to search to-dos
export const actionForSearchTodos = (search) => {
  return (dispatch, getState) => {
    if (search.length > 0) {
      const state = getState();

      const filteredTodos = state.todos.filter((todo) => todo.todoDescription.toLowerCase().includes(search.toLowerCase()));

      const todos = {
        todos: filteredTodos,
        isSearching: true,
      };

      dispatch(searchTodos(todos));
    } else {
      const todos = {
        todos: [],
        isSearching: false,
      };

      dispatch(searchTodos(todos));
    }
  };
};

const searchTodos = (todos) => ({
  type: types.SEARCH_TODOS,
  payload: todos,
});
