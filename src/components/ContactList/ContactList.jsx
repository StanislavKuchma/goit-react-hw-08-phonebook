import React from 'react';
import { ContactListItem } from '../ContactListItem';
import s from './ContactList.module.css';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const { data, isError, isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const contacts = data ?? [];

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = filteredContacts();
  return (
    <>
      {isError && toast.error(`Sorry try again`)}
      {isLoading && <h3> Loading...</h3>}
      {filterContacts.length === 0 ? (
        <p>Dont find any contacts</p>
      ) : (
        filterContacts.map((data, i) => (
          <ul className={s.contact} key={data.id}>
            <ContactListItem
              id={data.id}
              i={i}
              name={data.name}
              number={data.number}
            />
          </ul>
        ))
      )}
    </>
  );
};
