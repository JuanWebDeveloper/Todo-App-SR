// Containers
import Layouts from './Layouts';
import ListTodo from './ListTodo';
import Modals from './Modals';

const Main = () => {
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
