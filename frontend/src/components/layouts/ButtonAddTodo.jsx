// Helpers
import { showModalCreateTodo } from '../../helpers/modals';

export const ButtonAddTodo = () => {
  return (
    <div className='button-add_todo' onClick={showModalCreateTodo}>
      <button className='button'>
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  );
};
