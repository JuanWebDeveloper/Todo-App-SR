// Function to show the modal from create to-do
export const showModalCreateTodo = () => {
  let modal = document.querySelector('.modal');

  modal.classList.contains('hide-modal') && modal.classList.remove('hide-modal');
  modal.classList.add('show-modal');
};

// Function to hide the modal from create to-do
export const hideModalCreateTodo = () => {
  let modal = document.querySelector('.modal');

  modal.classList.remove('show-modal');
  modal.classList.add('hide-modal');
};

// Function to show the modal from editing to-do
export const showModalEditTodo = () => {
  let modalEdit = document.querySelector('#modalEdit');

  modalEdit.classList.contains('hide-modal') && modalEdit.classList.remove('hide-modal');
  modalEdit.classList.add('show-modal');
};

// Function to hide the modal from editing to-do
export const hideModalEditTodo = () => {
  let modal = document.querySelector('#modalEdit');

  modal.classList.remove('show-modal');
  modal.classList.add('hide-modal');
};
