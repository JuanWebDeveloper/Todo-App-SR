import { useSelector } from 'react-redux';

// Components
import { SearchTodo } from '../components/listTodo/SearchTodo';
import { SingleTodo } from '../components/listTodo/SingleTodo';

const ListTodo = () => {
  const state = useSelector((state) => state);

  return (
    <div className='list-todo'>
      <SearchTodo />
      <div className='todo-container'>
        {state.todos.map((todo) => (
          <SingleTodo key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default ListTodo;
