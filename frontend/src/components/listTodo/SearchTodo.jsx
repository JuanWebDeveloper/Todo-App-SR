import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Hooks
import { useForm } from '../../hooks/useForm';

// Actions
import { actionForSearchTodos } from '../../actions/appActions';

export const SearchTodo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Handle to-do search
  const { formValues, handleInputChange } = useForm({ search: '' });
  const { search } = formValues;

  // Handle keypresses
  const handleKeyPress = () => dispatch(actionForSearchTodos(search));

  return (
    <Fragment>
      {state.todos.length > 0 ? (
        <div className='search-todo'>
          <form>
            <input type='text' name='search' placeholder='Search to-do' value={search} onChange={handleInputChange} onKeyUp={handleKeyPress} />
          </form>
        </div>
      ) : (
        <div className='no-created isActive'>No created to-dos</div>
      )}
    </Fragment>
  );
};
