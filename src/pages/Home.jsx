import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { SearchContext } from '../App';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { setPageCount } from '../redux/slices/pageSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

const Home = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector((state) => state.filterSlice.value);
  const valueSort = useSelector((state) => state.sortSlice.value);
  const valuePage = useSelector((state) => state.pageSlice.value);
  const { items, status } = useSelector((state) => state.pizzaSlice);
  const { searchValue } = React.useContext(SearchContext);

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };
  //получение пицц
  const getPizzas = React.useCallback(async () => {
    const order = valueSort.sort.includes('-') ? `asc` : `desc`;
    const sortBy = valueSort.sort.replace('-', '');
    const category = valueFilter > 0 ? `category=${valueFilter}` : ``;
    const search = searchValue !== '' ? `search=${searchValue}` : ``;
    dispatch(
      fetchPizzas({
        valuePage,
        order,
        sortBy,
        category,
        search,
      }),
    );
    window.scrollTo(0, 0);
  }, [dispatch, valueSort, valueFilter, searchValue, valuePage]);

  React.useEffect(() => {
    getPizzas();
  }, [getPizzas]);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzas =
    Array.isArray(items) && items.length > 0
      ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
      : null;

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка 😕
          </h2>
          <p>К сожалению не удалось получить питсы. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <>
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
          <Pagination value={valuePage} onChangePage={onChangePage} />
        </>
      )}
    </div>
  );
};

export default Home;
