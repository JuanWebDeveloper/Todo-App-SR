// Hooks
import { useForm } from '../../hooks/useForm';

// Helpers
import { hideModalCreateTodo } from '../../helpers/modals';

export const CreateTodo = () => {
  const { formValues, handleInputChange } = useForm({
    createTodo: '',
  });

  const { createTodo } = formValues;

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
          <form>
            <input type='text' name='createTodo' placeholder='Todo Description' value={createTodo} onChange={handleInputChange} required />
            <button className='button'>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
