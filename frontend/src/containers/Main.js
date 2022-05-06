// Containers
import Layouts from './Layouts';
import Modals from './Modals';

const Main = () => {
  return (
    <div className='main'>
      <Layouts>
        <div className='content'>
          <Modals />
        </div>
      </Layouts>
    </div>
  );
};

export default Main;
