export const SingleTodo = () => {
  return (
    <div className='single-todo'>
      <div className='description-todo'>Todo Description</div>
      <div className='actions'>
        <button className='btn-completed'>
          <i className='fa-solid fa-check complete'></i>
          {/* <i className='fa-solid fa-xmark incomplete'></i>  */}
        </button>
        <button className='btn-edit'>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button className='btn-delete'>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  );
};
