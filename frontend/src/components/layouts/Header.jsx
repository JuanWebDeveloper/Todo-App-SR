import { Fragment } from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const state = useSelector((state) => state);

  return (
    <Fragment>
      {!state.todos.length > 0 ? (
        <header className='header'>
          <div className='header-text'>
            <h1 className='title'>To-do Application</h1>
            <p>With the help of this application create and manage your pending tasks so you don't forget to do them.</p>
          </div>
        </header>
      ) : (
        <header className='header'>
          <div className='header-text'>
            <h1 className='title'>To-do Application</h1>
            <h2>
              {state.todos.filter((todo) => todo.isCompleted).length} <span>to-dos completed of</span> {state.todos.length}
            </h2>
          </div>
        </header>
      )}
    </Fragment>
  );
};
