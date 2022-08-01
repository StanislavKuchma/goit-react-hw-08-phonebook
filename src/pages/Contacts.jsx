import { ContactList } from '../components/ContactList/ContactList';
import Form from '../components/Form';
import { Filter } from '../components/Filter';

export default function Contacts() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contact</h2>
      <ContactList />
    </div>
  );
}
