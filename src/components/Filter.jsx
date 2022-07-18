import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        style={{ width: 250, height: 30 }}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
