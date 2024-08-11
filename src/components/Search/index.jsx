import React from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
