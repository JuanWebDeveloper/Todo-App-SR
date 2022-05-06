// Components
import { SearchTodo } from '../components/listTodo/SearchTodo';
import { SingleTodo } from '../components/listTodo/SingleTodo';

const ListTodo = () => {
  return (
    <div className='list-todo'>
      <SearchTodo />
      <div className='todo-container'>
        <SingleTodo />
        <SingleTodo />
        <SingleTodo />
      </div>
    </div>
  );
};

export default ListTodo;
