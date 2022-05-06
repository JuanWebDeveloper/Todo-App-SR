import { Fragment } from 'react';

// Components
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { ButtonAddTodo } from '../components/layouts/ButtonAddTodo';

const Layouts = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <ButtonAddTodo />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layouts;
