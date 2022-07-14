import React from 'react';
import Form from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { formSubmitHandler } from './redux/contactSlice';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <Filter />
      <h2>Contact</h2>
      <ContactList />
    </div>
  );
};

export default App;
