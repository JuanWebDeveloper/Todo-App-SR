// Hooks
import { useForm } from '../../hooks/useForm';

export const SearchTodo = () => {
  const { formValues, handleInputChange } = useForm({
    search: '',
  });

  const { search } = formValues;

  return (
    <div className='search-todo'>
      <form>
        <input type='text' name='search' placeholder='Search to-do' value={search} onChange={handleInputChange} />
      </form>
    </div>
  );
};
