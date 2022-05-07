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

// Actions to save a to-dos
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
