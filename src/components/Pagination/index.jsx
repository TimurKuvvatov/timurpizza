import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import { useSelector } from 'react-redux';

const Pagination = ({value, onChangePage}) => {
  const pageCount = useSelector(state => state.cartSlice.items.length) / 4;
  console.log(pageCount, 'pageCount')
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={value - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;