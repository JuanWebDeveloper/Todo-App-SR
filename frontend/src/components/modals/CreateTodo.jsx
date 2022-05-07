import { useDispatch } from 'react-redux';

// Hooks
import { useForm } from '../../hooks/useForm';

// Helpers
import { hideModalCreateTodo } from '../../helpers/modals';

// Actions
import { actionForSaveTodo } from '../../actions/appActions';

export const CreateTodo = () => {
  const dispatch = useDispatch();

  // Handle form values
  const { formValues, setFormValues, handleInputChange } = useForm({ createTodo: '' });
  const { createTodo } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionForSaveTodo(createTodo));
    setFormValues({ createTodo: '' });
    hideModalCreateTodo();
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4>Create To-do</h4>
          <button type='button' className='close' aria-label='Close' onClick={hideModalCreateTodo}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <input type='text' name='createTodo' placeholder='Todo Description' value={createTodo} onChange={handleInputChange} required />
            <button className='button'>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
