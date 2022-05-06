import { Fragment } from 'react';

// Components of the modals
import { CreateTodo } from '../components/modals/CreateTodo';
import { EditTodo } from '../components/modals/EditTodo';

const Modals = () => {
  return (
    <Fragment>
      <CreateTodo />
      <EditTodo />
    </Fragment>
  );
};

export default Modals;
