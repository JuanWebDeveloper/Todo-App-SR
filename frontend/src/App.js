// Store of the application
import { Provider } from 'react-redux';
import { store } from './store/store';

// Container main
import Main from './containers/Main';

// Application styles
import './assets/sass/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
