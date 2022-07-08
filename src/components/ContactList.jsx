import React from 'react';
import { ContactListItem } from './ContactListItem';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(data => (
        <ul className={s.contact} key={data.id}>
          <ContactListItem
            id={data.id}
            name={data.name}
            number={data.number}
            onDeleteContact={onDeleteContact}
          />
        </ul>
      ))}
    </>
  );
};

