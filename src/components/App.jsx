import React from 'react';
import Form from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

const App = () => {

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contact</h2>
      <ContactList />
    </div>
  );
};

export default App;
