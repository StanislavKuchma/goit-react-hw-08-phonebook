import React from 'react';
import { ContactListItem } from './ContactListItem';
import s from './ContactList.module.css';
import { useGetContactsQuery } from '../redux/contactsApi';
import { toast } from 'react-toastify';

export const ContactList = ({ filter }) => {
  const { data, isError, isLoading } = useGetContactsQuery();

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
