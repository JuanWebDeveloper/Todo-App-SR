import { Fragment } from 'react';
import { useSelector } from 'react-redux';

// Components of the modals
import { CreateTodo } from '../components/modals/CreateTodo';
import { EditTodo } from '../components/modals/EditTodo';

const Modals = () => {
  const state = useSelector((state) => state);

  return (
    <Fragment>
      <CreateTodo />
      {state.isEditing.id && <EditTodo />}
    </Fragment>
  );
};

export default Modals;
