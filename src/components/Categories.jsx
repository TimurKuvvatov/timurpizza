import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory } from '../redux/slices/filterSlice';


function Categories() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filterSlice.value)
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            onClick={() => dispatch(filterCategory(index))}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
