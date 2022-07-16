import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formSubmitHandler } from '../redux/contactSlice';
import { getContacts } from '../redux/selectors';
import { nanoid } from 'nanoid';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsArray = useSelector(getContacts);

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
      id: nanoid(),
      name: name,
      number: number,
    };
    const filterContact = name.toLocaleLowerCase();
    const contactsForFind = contactsArray.find(
      i => i.name.toLocaleLowerCase() === filterContact
    );
    if (contactsForFind) {
      window.alert(`${name} is already in contacts`);
      return;
    }
    dispatch(formSubmitHandler(item));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
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
            Add contact
          </button>
        </label>
      </form>
    </>
  );
};
export default Form;
