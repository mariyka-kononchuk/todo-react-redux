import React from 'react';
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import TodoList from '../TodoList';

export default function App () {
    return (
      <Container>
        <div>
          {/* <h1 className={s.titlePhonebbok}>Phonebook</h1> */}
          <ContactForm />
          {/* <h2 className={s.titleContacts}>Contacts</h2> */}
          <Filter />
          {/* <ContactList /> */}
          <TodoList />
        </div>
      </Container>
    );
  
}


