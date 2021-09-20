import { useState, useEffect } from 'react';
// import { Component } from 'react';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const shortid = require('shortid');

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filterV, setFilterV] = useState('');

  useEffect(() => {
    return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ([name, number]) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    const contactFind = contacts.find(contact => contact.name === name);
    if (contactFind !== undefined) {
      return alert(`${name} is already in contacts.`);
    }
    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilterV(e.target.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filterV.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const visibleContacts = getVisibleContacts(contacts, filterV);
  return (
    <div>
      <h2 className="phonebook-title">Phonebook</h2>
      <ContactForm onSubmit={addContact} />

      <h3 className="phonebook-title">Contacts</h3>
      <Filter value={filterV} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addContact = ([name, number]) => {
//     const contact = {
//       id: shortid.generate(),
//       name: name,
//       number: number,
//     };
//     const contacts = this.state.contacts;
//     const contactFind = contacts.find(contact => contact.name === name);
//     if (contactFind !== undefined) {
//       return alert(`${name} is already in contacts.`);
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <div>
//         <h2 className="phonebook-title">Phonebook</h2>
//         <ContactForm onSubmit={this.addContact} />

//         <h3 className="phonebook-title">Contacts</h3>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
