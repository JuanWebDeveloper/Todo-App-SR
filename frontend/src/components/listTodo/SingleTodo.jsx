import { useDispatch } from 'react-redux';

// Actions
import { actionForGetById, actionForDeleteTodo, actionForUpdateTodo } from '../../actions/appActions';

export const SingleTodo = ({ id, todoDescription, isCompleted }) => {
  const dispatch = useDispatch();

  // Dispatch the action to get the to-do by is id
  const handleIsEditing = () => dispatch(actionForGetById(id));

  // Dispatch the action to delete the to-do by is id
  const handleDelete = () => dispatch(actionForDeleteTodo(id));

  // Handle marking of completed and not completed tasks
  const handleToggleMark = () => {
    const todo = {
      id,
      todoDescription,
      isCompleted: !isCompleted,
    };

    // Dispatch the action to update the to-do
    dispatch(actionForUpdateTodo(todo));
  };

  return (
    <div className={`single-todo ${isCompleted && 'isCompleted'}`}>
      <div className='description-todo'>{todoDescription}</div>
      <div className='actions'>
        <button className='btn-completed' onClick={handleToggleMark}>
          {isCompleted ? <i className='fa-solid fa-xmark incomplete'></i> : <i className='fa-solid fa-check complete'></i>}
        </button>
        <button className={`btn-edit ${isCompleted && 'disabled'}`} onClick={handleIsEditing}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button className='btn-delete' onClick={handleDelete}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  );
};
