import React from 'react';
import { ContactListItem } from './ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
// import { useGetContactsQuery } from './redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // const { data, error, isLoading } = useGetContactsQuery();

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = filteredContacts();
  return (
    <>
      {filterContacts.length === 0 && <p>Dont find any contacts</p>}
      {filterContacts.map((data, i) => (
        <ul className={s.contact} key={data.id}>
          <ContactListItem
            id={data.id}
            i={i}
            name={data.name}
            number={data.number}
          />
        </ul>
      ))}
    </>
  );
};
