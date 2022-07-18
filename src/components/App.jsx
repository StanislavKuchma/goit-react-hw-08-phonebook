import React from 'react';
import { useState } from 'react';
import Form from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

const App = () => {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filter value={filter} onChange={changeFilter} />
      <h2>Contact</h2>
      <ContactList filter={filter} />
    </div>
  );
};

export default App;
