import React from 'react';
import { ContactListItem } from './ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = filteredContacts();
  return (
    <>
      {filterContacts.length === 0 && <p>Dont find any contacts</p>}
      {filterContacts.map(data => (
        <ul className={s.contact} key={data.id}>
          <ContactListItem id={data.id} name={data.name} number={data.number} />
        </ul>
      ))}
    </>
  );
};
