import React from 'react';
import { changeFilter } from './redux/contactSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const addToFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        style={{ width: 300, height: 40 }}
        type="text"
        onChange={addToFilter}
      />
    </>
  );
};
