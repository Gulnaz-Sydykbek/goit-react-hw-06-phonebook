import { useState, useEffect } from 'react';
import shortId from 'shortid';
import Container from './container/Container';
import ContactList from './phonebook/ContactList';
import ContactForm from './phonebook/ContactForm';
import Filter from './phonebook/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addNewContact = (name, number) => {
    const contact = {
      id: shortId.generate(),
      name,
      number,
    };

    const addSameName = contacts.map(contact => contact.name).includes(name);
    const addSameNumber = contacts
      .map(contact => contact.number)
      .includes(number);

    if (addSameName) {
      alert(`${name} is already in contacts`);
    } else if (addSameNumber) {
      alert(`${number} is already in contacts`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    const target = e.currentTarget;

    setFilter(target.value);
  };

  const normolizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter),
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter onChangeFilter={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}

export default App;
