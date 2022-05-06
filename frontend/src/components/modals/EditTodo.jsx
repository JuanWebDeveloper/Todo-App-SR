export const EditTodo = () => {
  return (
    <div className='modal' id='modalEdit'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4>Edit To-do</h4>
          <button type='button' className='close' aria-label='Close'>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
        <div className='modal-body'>
          <form>
            <input type='text' name='editTodo' placeholder='Todo Description' required />
            <button className='button'>Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
