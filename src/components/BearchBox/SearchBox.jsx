import { useDispatch, useSelector } from 'react-redux';

import { setFilterContact } from '../../redux/filters/slice';
import { selectValueFilter } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectValueFilter);

  const handleFilterChange = value => {
    dispatch(setFilterContact(value));
  };

  return (
    <div className={css.searchWrapper}>
      <p>Find contact by name or fonenumber</p>
      <input
        type="text"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
