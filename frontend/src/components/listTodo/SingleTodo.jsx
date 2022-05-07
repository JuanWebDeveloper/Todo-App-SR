import { useDispatch } from 'react-redux';

// Actions
import { actionForGetById } from '../../actions/appActions';

export const SingleTodo = ({ id, todoDescription, isCompleted }) => {
  const dispatch = useDispatch();

  // Get data from the to-do in the database by their id
  const handleIsEditing = () => dispatch(actionForGetById(id));

  return (
    <div className={`single-todo ${isCompleted && 'isCompleted'}`}>
      <div className='description-todo'>{todoDescription}</div>
      <div className='actions'>
        <button className='btn-completed'>
          {isCompleted ? <i className='fa-solid fa-xmark incomplete'></i> : <i className='fa-solid fa-check complete'></i>}
        </button>
        <button className={`btn-edit ${isCompleted && 'disabled'}`} onClick={handleIsEditing}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button className='btn-delete'>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  );
};
