import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddContactMutation } from '../redux/contactsApi';
import { selectContacts } from '../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact, { isError, isLoading }] = useAddContactMutation();
  const contactsArray = useSelector(selectContacts);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const item = {
      name: name,
      number: number,
    };
    const filterContact = name.toLocaleLowerCase();
    const contactsForFind = contactsArray.find(
      i => i.name.toLocaleLowerCase() === filterContact
    );
    if (contactsForFind) {
      window.alert(`${name} is already in contacts`);
      reset();
      return;
    }
    const handleAddContact = async () => {
      await addContact(item).unwrap();
      toast.info(`Contacts  ${name} added`);
    };

    handleAddContact();
    reset();
  };

  return (
    <>
      {isError && toast.error(`Sorry try again`)}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <br />
          <input
            style={{ width: 250, height: 30 }}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            style={{ width: 250, height: 30 }}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <button
            type="submit"
            style={{ width: 150, height: 40, marginTop: 12 }}
            className=""
          >
            {isLoading ? <Loader /> : 'Add contact'}
          </button>
        </label>
      </form>
    </>
  );
};
export default Form;
