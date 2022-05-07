import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Containers
import Layouts from './Layouts';
import ListTodo from './ListTodo';
import Modals from './Modals';

// Actions
import { actionForGetAllTodos } from '../actions/appActions';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionForGetAllTodos());
  }, [dispatch]);

  return (
    <div className='main'>
      <Layouts>
        <div className='content'>
          <ListTodo />
          <Modals />
        </div>
      </Layouts>
    </div>
  );
};

export default Main;
